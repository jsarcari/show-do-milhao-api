import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionRepository } from './question.repository';
import { CreateQuestionDTO } from './dto/CreateQuestion.dto';

@Controller('/questions')
export class QuestionController {
  constructor(private questionRepository: QuestionRepository) {}

  @Post()
  async createQuestion(@Body() data: CreateQuestionDTO) {
    this.questionRepository.save(data);
    return data;
  }

  @Get()
  async listQuestions() {
    return this.questionRepository.list();
  }
}
