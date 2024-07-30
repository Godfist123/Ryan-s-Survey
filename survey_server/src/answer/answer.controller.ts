import { Body, Controller, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('answer')
export class AnswerController {
  constructor(private answerService: AnswerService) {}

  @Public()
  @Post()
  async create(@Body() body) {
    return await this.answerService.create(body);
  }
}
