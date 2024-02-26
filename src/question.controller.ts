import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuestionRepository } from './question.repository';
import { CreateQuestionDTO } from './dto/CreateQuestion.dto';
import { QuestionEntity } from './question.entity';
import { UpdateQuestionDTO } from './dto/UpdateQuestion.dto';

@Controller('/')
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

  @Put('/:id')
  async updateQuestion(@Param('id') id: Number, @Body() newData: UpdateQuestionDTO){
    this.questionRepository.update(id, newData);

    return { message: 'Question updated with success!' };
  }

  @Delete('/:id')
  async removeQuestion(@Param('id') id: Number) {
    this.questionRepository.remove(id);

    return { message: 'Question deleted with success!' };
  }
}
