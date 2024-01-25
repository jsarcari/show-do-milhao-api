import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from 'class-validator';
import { QuestionRepository } from 'src/question.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class IdIsUniqueValidator implements ValidatorConstraintInterface {

  constructor(private questionRepository: QuestionRepository) {}

  async validate(value: Number,validationArguments?: ValidationArguments): Promise<boolean> {
    const questionWithIdExists = await this.questionRepository.existsWithId(value);
    return !questionWithIdExists;
  }
}

export const IdIsUnique = (validationOptions: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: IdIsUniqueValidator
        })
    }
}
