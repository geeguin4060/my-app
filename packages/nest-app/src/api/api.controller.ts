import { UserService } from './../user/user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api')
export class ApiController {
  constructor(private readonly userService: UserService) {}

  @Post(`user`)
  async createUser(
    @Body() data: { email: string; password: string; name: string },
  ) {
    return this.userService.createUser(data);
  }

  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }
}
