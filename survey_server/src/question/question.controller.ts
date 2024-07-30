import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './schemas/question.schema';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Get('test')
  getTest() {
    throw new HttpException('test error', HttpStatus.BAD_REQUEST);
  }

  @Post()
  create(@Request() req) {
    const { username } = req.user;
    return this.questionService.create(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() question: Question) {
    return this.questionService.update(id, question);
  }

  @Get()
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @Get('list')
  async findAllList(
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    const list = await this.questionService.findAllList(
      keyword,
      page,
      pageSize,
    );

    const count = await this.questionService.countAll(keyword);

    return {
      list,
      count,
    };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
}
