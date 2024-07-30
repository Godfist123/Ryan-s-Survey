import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    try {
      return await this.userService.create(userData);
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('info')
  @Redirect('/api/auth/profile', 302) //301 Permanent Redirect, 302 Temporary Redirect
  async getUserInfo() {
    return {};
  }

  @Public()
  @Post('login')
  @Redirect('/api/auth/login', 307) //307 Temporary Redirect, 308 Permanent Redirect
  async login() {
    return {};
  }
}
