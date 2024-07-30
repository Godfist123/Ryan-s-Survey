import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Public } from './decorator/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() userInfo: CreateUserDto) {
    const { username, password } = userInfo;
    return this.authService.validateUser(username, password);
  }

  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
