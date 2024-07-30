import { Injectable } from '@nestjs/common';
import { Question } from './schemas/question.schema';
import { InjectModel } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';
import mongoose from 'mongoose';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private questionModel) {}

  async create(username: string) {
    const createdQuestion = new this.questionModel({
      title: 'title' + Date.now(),
      desc: 'desc',
      author: username,
      componentList: [
        {
          fe_id: nanoid(),
          type: 'questionInfo',
          title: 'questionInfo',
          props: {
            title: 'questionInfo',
            desc: 'questionInfo',
          },
        },
      ],
    });
    return await createdQuestion.save();
  }

  async delete(id: string, author: string) {
    // return await this.questionModel.findByIdAndDelete(id);
    return await this.questionModel.findOneAndDelete({ _id: id, author });
  }

  async deleteMany(ids: string[], author: string) {
    return await this.questionModel.deleteMany({
      _id: { $in: ids }, //Fuzzy query
      author,
    });
  }

  async findOne(id: string) {
    return await this.questionModel.findById(id);
  }

  async update(id: string, question: Question, author: string) {
    return await this.questionModel.updateOne({ _id: id, author }, question);
  }

  async findAllList({
    keyword = '',
    page = 1,
    pageSize = 10,
    isDeleted = false,
    isStar,
    author = '',
  }) {
    const whereOptions: any = { author, isDeleted };
    if (isStar !== undefined) {
      whereOptions.isStar = isStar;
    }
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

  async countAll({ keyword = '', isDeleted = false, isStar, author = '' }) {
    const whereOptions: any = { author, isDeleted };
    if (isStar !== undefined) {
      whereOptions.isStar = isStar;
    }
    if (keyword) {
      const reg = new RegExp(keyword, 'i');
      whereOptions.title = { $regex: reg }; //%title%
    }
    return await this.questionModel.countDocuments(whereOptions);
  }

  async duplicate(id: string, author: string) {
    const question = await this.questionModel.findById(id);
    const newQuestion = new this.questionModel({
      ...question.toObject(),
      _id: new mongoose.Types.ObjectId(),
      title: question.title + ' copy',
      author,
      isPublished: false,
      isStar: false,
      componentList: question.componentList.map((item) => {
        return {
          ...item,
          fe_id: nanoid(),
        };
      }),
    });
    return await newQuestion.save();
  }
}
