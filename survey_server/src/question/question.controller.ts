import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('question')
export class QuestionController {
  @Get('test')
  getTest() {
    throw new HttpException('test error', HttpStatus.BAD_REQUEST);
  }
}
