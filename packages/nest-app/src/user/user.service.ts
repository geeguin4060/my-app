import { User } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async createUser(params: {
    email: User['email'];
    password: User['password'];
    name: User['name'];
  }) {
    const { email, password, name } = params;

    const user = await this.repository.createUser({
      data: {
        email,
        password,
        name,
      },
    });

    return user;
  }

  async getUsers() {
    const users = await this.repository.getUsers({});

    return users;
  }
}
