import { Module } from "@nestjs/common";
import { QuestionController } from "./question.controller";
import { QuestionRepository } from "./question.repository";

@Module({
    controllers: [ QuestionController ],
    providers: [ QuestionRepository ]
})
export class QuestionModule {

}