//@flow
import EntityBase from './entityBase';
import SurveyQuestion from './SurveyQuestion';

export class SurveyAssociatedQuestion extends EntityBase {
  position: string;
  page: string;
  question: SurveyQuestion;

  static fromApiEntity(apiSurveyAssociatedQuestion:SurveyAssociatedQuestionType): SurveyAssociatedQuestion {
    let surveyAssociatedQuestion = new SurveyAssociatedQuestion();
    surveyAssociatedQuestion.id = apiSurveyAssociatedQuestion.id;
    surveyAssociatedQuestion.position = apiSurveyAssociatedQuestion.position;
    surveyAssociatedQuestion.page = apiSurveyAssociatedQuestion.page;
    if (apiSurveyAssociatedQuestion.question) surveyAssociatedQuestion.question = SurveyQuestion.fromApiEntity(apiSurveyAssociatedQuestion.question);

    return surveyAssociatedQuestion;
  }
}

export default SurveyAssociatedQuestion;

export type SurveyAssociatedQuestionType = {
  id: number,
  position: string;
  page: string;
  question: SurveyQuestion;
}

