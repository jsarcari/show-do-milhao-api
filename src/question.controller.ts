import { Body, Controller, Get, Post } from "@nestjs/common";
import { QuestionRepository } from "./question.repository";

@Controller('/questions')
export class QuestionController {

    constructor(private questionRepository: QuestionRepository) {}

    @Post()
    async createQuestion(@Body() data) {
        this.questionRepository.save(data);
        return data;
    }

    @Get()
    async listQuestions() {
        return this.questionRepository.list();
    }

}