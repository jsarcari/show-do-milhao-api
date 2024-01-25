export class QuestionEntity {
  id: Number;
  question: string;
  correct_answer: string;
  difficulty: string;
  category: string;
  incorrect_answers: Array<string>;
}
