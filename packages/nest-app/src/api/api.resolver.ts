import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { UserService } from 'src/user/user.service';

@Resolver()
export class ApiResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getUsers() {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  async createUser(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Args({ name: 'name', type: () => String }) name: string,
  ) {
    return this.userService.createUser({ email, password, name });
  }
}
