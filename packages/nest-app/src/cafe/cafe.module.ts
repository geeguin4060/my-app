import { CafeResolver } from './cafe.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [CafeResolver],
})
export class CafeModule {}
