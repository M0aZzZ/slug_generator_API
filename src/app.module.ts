import { Module } from '@nestjs/common';
import { TestController } from './app.controller';

@Module({
  imports: [],
  controllers: [TestController],
})
export class AppModule {}
