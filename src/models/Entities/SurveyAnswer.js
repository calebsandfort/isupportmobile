//@flow
import EntityBase from './entityBase';
import Survey from './Survey';
import SurveyQuestion from './SurveyQuestion';
import SurveyRequest from './SurveyRequest';

export class SurveyAnswer extends EntityBase {
  response: string;
  dateSubmitted: string;
  survey: Survey;
  question: SurveyQuestion;
  request: SurveyRequest;

  static fromApiEntity(apiSurveyAnswer:SurveyAnswerType): SurveyAnswer {
    let surveyAnswer = new SurveyAnswer();
    surveyAnswer.id = apiSurveyAnswer.id;
    surveyAnswer.response = apiSurveyAnswer.response;
    surveyAnswer.dateSubmitted = apiSurveyAnswer.dateSubmitted;
    if (apiSurveyAnswer.survey) surveyAnswer.survey = Survey.fromApiEntity(apiSurveyAnswer.survey);
    if (apiSurveyAnswer.question) surveyAnswer.question = SurveyQuestion.fromApiEntity(apiSurveyAnswer.question);
    if (apiSurveyAnswer.request) surveyAnswer.request = SurveyRequest.fromApiEntity(apiSurveyAnswer.request);

    return surveyAnswer;
  }
}

export default SurveyAnswer;

export type SurveyAnswerType = {
  id: number,
  response: string;
  dateSubmitted: string;
  survey: Survey;
  question: SurveyQuestion;
  request: SurveyRequest;
}

