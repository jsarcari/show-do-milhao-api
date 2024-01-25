import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateQuestionDTO {
  @IsNumber()
  @IsNotEmpty()
  id: Number;
  @IsString()
  @IsNotEmpty()
  question: String;
  @IsString()
  @IsNotEmpty()
  correct_answer: String;
  @IsString()
  @IsNotEmpty()
  difficulty: String;
  @IsString()
  @IsNotEmpty()
  category: String;
  @IsArray()
  @IsNotEmpty()
  incorrect_answers: Array<String>;
}
