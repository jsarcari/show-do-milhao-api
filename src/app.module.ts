import { Module } from '@nestjs/common';
import { QuestionModule } from './question.module';

@Module({
  imports: [QuestionModule],
})
export class AppModule {}
