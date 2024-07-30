import { Injectable } from '@nestjs/common';
import { Question } from './schemas/question.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private questionModel) {}

  async create(username: string) {
    const createdQuestion = new this.questionModel({
      title: 'title' + Date.now(),
      desc: 'desc',
      author: username,
    });
    return await createdQuestion.save();
  }

  async delete(id: string) {
    return await this.questionModel.findByIdAndDelete(id);
  }

  async findOne(id: string) {
    return await this.questionModel.findById(id);
  }

  async update(id: string, question: Question) {
    return await this.questionModel.updateOne({ _id: id }, question);
  }

  async findAllList(keyword = '', page = 1, pageSize = 10) {
    const whereOptions: any = {};
    if (keyword) {
      const reg = new RegExp(keyword, 'i');
      whereOptions.title = { $regex: reg }; //%title%
    }
    return await this.questionModel
      .find(whereOptions)
      .sort({ _id: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);
  }

  async countAll(keyword = '') {
    const whereOptions: any = {};
    if (keyword) {
      const reg = new RegExp(keyword, 'i');
      whereOptions.title = { $regex: reg }; //%title%
    }
    return await this.questionModel.countDocuments(whereOptions);
  }
}
