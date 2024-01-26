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

  async update(id: Number, updateData: Partial<QuestionEntity>) {
    
    const question = this.getQuestion(id);

    Object.entries(updateData).forEach(([key, value]) => {

      question[key] = value;

      return question;
    })
  }

  private getQuestion(id: Number) {
    const possibleQuestion = this.questions.find(
        questionSalved => questionSalved.id === id
    );

    if(!possibleQuestion) {
      throw new Error('Question not found.');
    }

    return possibleQuestion;
  }

  async remove(id: Number) {
    const question = this.getQuestion(id);
    this.questions = this.questions.filter(
        questionSalved => questionSalved.id !== id
    );

    return question;
  }
}
