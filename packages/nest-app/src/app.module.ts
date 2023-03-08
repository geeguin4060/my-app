import { PrismaModule } from 'src/prisma/prisma.module';
import { ApiModule } from './api/api.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [ApiModule, UserModule, PrismaModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
