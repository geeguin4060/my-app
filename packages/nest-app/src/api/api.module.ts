import { ApiController } from './api.controller';
import { ApiResolver } from './api.resolver';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ApiController],
  providers: [ApiResolver],
})
export class ApiModule {}
