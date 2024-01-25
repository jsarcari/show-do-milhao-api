import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionRepository } from './question.repository';
import { IdIsUniqueValidator } from './validation/idIsUnique.validator';

@Module({
  controllers: [QuestionController],
  providers: [QuestionRepository, IdIsUniqueValidator],
})
export class QuestionModule {}
