import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IdIsUnique } from 'src/validation/idIsUnique.validator';

export class CreateQuestionDTO {
  @IsNumber()
  @IsNotEmpty()
  @IdIsUnique({ message: 'Already exists a question with this id.'})
  id: Number;
  @IsString()
  @IsNotEmpty()
  question: string;
  @IsString()
  @IsNotEmpty()
  correct_answer: string;
  @IsString()
  @IsNotEmpty()
  difficulty: string;
  @IsString()
  @IsNotEmpty()
  category: string;
  @IsArray()
  @IsNotEmpty()
  incorrect_answers: Array<string>;
}
