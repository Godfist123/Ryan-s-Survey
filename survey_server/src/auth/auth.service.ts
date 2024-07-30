import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username, password);
    if (user && user.password === password) {
      const { password: pwd, ...userInfo } = user.toObject(); //eslint-disable-line
      return this.jwtService.sign(userInfo);
    }
    throw new UnauthorizedException('Invalid username or password');
  }
}
