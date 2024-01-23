import { Injectable } from "@nestjs/common";

@Injectable()
export class QuestionRepository {
    private questions = [];

    async save(question) {
        this.questions.push(question);
    }

    async list() {
        return this.questions;
    }
}