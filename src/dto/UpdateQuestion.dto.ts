import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { IdIsUnique } from 'src/validation/idIsUnique.validator';

export class UpdateQuestionDTO {
  @IsNumber()
  @IsOptional()
  @IdIsUnique({ message: 'Already exists a question with this id.'})
  id: Number;
  @IsString()
  @IsOptional()
  question: string;
  @IsString()
  @IsOptional()
  correct_answer: string;
  @IsString()
  @IsOptional()
  difficulty: string;
  @IsString()
  @IsOptional()
  category: string;
  @IsArray()
  @IsOptional()
  incorrect_answers: Array<string>;
}
