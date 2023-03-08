import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { User as UserDB } from '@prisma/client';

@ObjectType({})
export class User {
  @Field(() => String)
  id: UserDB[`id`];

  @Field(() => String)
  email: UserDB[`email`];

  @Field(() => String)
  password: UserDB[`password`];

  @Field(() => String)
  name: UserDB[`name`];

  @Field(() => GraphQLISODateTime)
  createdAt: UserDB[`createdAt`];

  @Field(() => GraphQLISODateTime)
  updatedAt: UserDB[`updatedAt`];
}
