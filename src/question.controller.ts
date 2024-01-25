import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionRepository } from './question.repository';
import { CreateQuestionDTO } from './dto/CreateQuestion.dto';
import { QuestionEntity } from './question.entity';

@Controller('/questions')
export class QuestionController {

  constructor(private questionRepository: QuestionRepository) {}

  @Post()
  async createQuestion(@Body() data: CreateQuestionDTO) {
    const questionEntity = new QuestionEntity();
    questionEntity.id = data.id;
    questionEntity.question = data.question;
    questionEntity.correct_answer = data.correct_answer;
    questionEntity.difficulty = data.difficulty;
    questionEntity.incorrect_answers = data.incorrect_answers;
    this.questionRepository.save(questionEntity);
    return { message: 'Question created with success!' };
  }

  @Get()
  async listQuestions() {
    return this.questionRepository.list();
  }
}
