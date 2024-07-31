import { Injectable } from '@nestjs/common';
import { QuestionService } from './../question/question.service';
import { AnswerService } from 'src/answer/answer.service';

@Injectable()
export class StatService {
  constructor(
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
  ) {}

  private _getRadioOptText(value, props: any = {}) {
    const { options = [] } = props;
    const length = options.length;

    for (let i = 0; i < length; i++) {
      const item = options[i];
      if (item.value === value) {
        return item.text;
        break;
      }
    }
    return '';
  }

  private _getCheckboxOptText(value, props: any = {}) {
    const { list = [] } = props;
    const length = list.length;

    for (let i = 0; i < length; i++) {
      const item = list[i];
      if (item.value === value) {
        return item.text;
        break;
      }
    }
    return '';
  }

  /**
   * generate answerList, format: { componentFeId1: value1, componentFeId2: value2 }
   * @param {Object} question question info
   * @param {Array} answerList answer list
   */
  private _genAnswersInfo(question, answerList = []) {
    const res = {};

    const { componentList = [] } = question;

    answerList.forEach((a) => {
      const { componentId: componentFeId, value } = a;

      // get component info
      const comp = componentList.filter((c) => c.fe_id === componentFeId)[0];
      const { type, props = {} } = comp;
      if (type === 'QuestionRadio') {
        // radio
        res[componentFeId] = value
          .split(',')
          .map((v) => this._getRadioOptText(v, props))
          .toString();
      } else if (type === 'QuestionCheckbox') {
        // checkbox
        res[componentFeId] = value
          .split(',')
          .map((v) => this._getCheckboxOptText(v, props))
          .toString();
      } else {
        // other
        res[componentFeId] = value.toString();
      }
    });

    return res;
  }

  async getQuestionStatListAndCount(
    questionId: string,
    opt: { page: number; pageSize: number },
  ) {
    const noData = { list: [], count: 0 };
    if (!questionId) return noData;

    const q = await this.questionService.findOne(questionId);
    if (q == null) return noData;

    const total = await this.answerService.count(questionId);
    if (total === 0) return noData;

    const answers = await this.answerService.findAll(questionId, opt);

    const list = answers.map((a) => {
      return {
        _id: a._id,
        ...this._genAnswersInfo(q, a.answerList),
      };
    });

    return {
      list,
      total,
    };
  }

  // get single component stat
  async getComponentStat(questionId: string, componentFeId: string) {
    if (!questionId || !componentFeId) return [];

    // get question
    const q = await this.questionService.findOne(questionId);
    if (q == null) return [];

    // get component
    const { componentList = [] } = q;
    const comp = componentList.filter((c) => c.fe_id === componentFeId)[0];
    console.log('comp', comp);
    if (comp == null) return [];

    const { type, props } = comp;
    if (type !== 'QuestionRadio' && type !== 'QuestionCheckbox') {
      return [];
    }

    // get answers
    const total = await this.answerService.count(questionId);
    if (total === 0) return [];
    const answers = await this.answerService.findAll(questionId, {
      page: 1,
      pageSize: total, // get all
    });

    // count
    const countInfo = {};
    answers.forEach((a) => {
      const { answerList = [] } = a;
      answerList.forEach((a) => {
        if (a.componentId !== componentFeId) return;
        a.value.split(',').forEach((v) => {
          if (countInfo[v] == null) countInfo[v] = 0;
          countInfo[v]++; // accumulate
        });
      });
    });

    // format
    const list = [];
    for (const val in countInfo) {
      // get text
      let text = '';
      if (type === 'QuestionRadio') {
        text = this._getRadioOptText(val, props);
      }
      if (type === 'QuestionCheckbox') {
        text = this._getCheckboxOptText(val, props);
      }

      list.push({ name: text, count: countInfo[val] });
    }

    return list;
  }
}
