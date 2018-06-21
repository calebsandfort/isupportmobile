//@flow
import EntityBase from './entityBase';
import {SurveyQuestionType} from './Enums';

export class SurveyQuestion extends EntityBase {
  question: string;
  description: string;
  options: string;
  imageContentType: string;
  required: string;
  imageData: string;
  forReps: string;
  maxColumns: string;
  questionType: SurveyQuestionType;

  static fromApiEntity(apiSurveyQuestion:SurveyQuestionEntityType): SurveyQuestion {
    let surveyQuestion = new SurveyQuestion();
    surveyQuestion.id = apiSurveyQuestion.id;
    surveyQuestion.question = apiSurveyQuestion.question;
    surveyQuestion.description = apiSurveyQuestion.description;
    surveyQuestion.options = apiSurveyQuestion.options;
    surveyQuestion.imageContentType = apiSurveyQuestion.imageContentType;
    surveyQuestion.required = apiSurveyQuestion.required;
    surveyQuestion.imageData = apiSurveyQuestion.imageData;
    surveyQuestion.forReps = apiSurveyQuestion.forReps;
    surveyQuestion.maxColumns = apiSurveyQuestion.maxColumns;
    surveyQuestion.questionType = SurveyQuestionType.enumOrdinalOf(parseInt(apiSurveyQuestion.questionType, 10));

    return surveyQuestion;
  }
}

export default SurveyQuestion;

export type SurveyQuestionEntityType = {
  id: number,
  question: string;
  description: string;
  options: string;
  imageContentType: string;
  required: string;
  imageData: string;
  forReps: string;
  maxColumns: string;
  questionType: SurveyQuestionType;
}
