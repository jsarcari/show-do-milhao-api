import { Injectable } from '@nestjs/common';
import { QuestionEntity } from './question.entity';

@Injectable()
export class QuestionRepository {
  private questions: QuestionEntity[] = [];

  async save(question: QuestionEntity) {
    this.questions.push(question);
  }

  async list() {
    return this.questions;
  }

  async existsWithId(id: Number) {
    const possibleQuestion = this.questions.find(
      question => question.id === id
    );

    return possibleQuestion !== undefined;
  }
}
