//@flow
import EntityBase from './entityBase';
import SurveyAssociatedQuestion from './SurveyAssociatedQuestion';
import {LogicOperators} from './Enums';

export class SurveyQuestionDisplayCondition extends EntityBase {
  matchValue: string;
  matchType: LogicOperators;
  matchQuestion: SurveyAssociatedQuestion;
  question: SurveyAssociatedQuestion;
  parent: SurveyQuestionDisplayCondition;

  static fromApiEntity(apiSurveyQuestionDisplayCondition:SurveyQuestionDisplayConditionType): SurveyQuestionDisplayCondition {
    let surveyQuestionDisplayCondition = new SurveyQuestionDisplayCondition();
    surveyQuestionDisplayCondition.id = apiSurveyQuestionDisplayCondition.id;
    surveyQuestionDisplayCondition.matchValue = apiSurveyQuestionDisplayCondition.matchValue;
    surveyQuestionDisplayCondition.matchType = LogicOperators.enumOrdinalOf(parseInt(apiSurveyQuestionDisplayCondition.matchType, 10));
    if (apiSurveyQuestionDisplayCondition.matchQuestion) surveyQuestionDisplayCondition.matchQuestion = SurveyAssociatedQuestion.fromApiEntity(apiSurveyQuestionDisplayCondition.matchQuestion);
    if (apiSurveyQuestionDisplayCondition.question) surveyQuestionDisplayCondition.question = SurveyAssociatedQuestion.fromApiEntity(apiSurveyQuestionDisplayCondition.question);
    if (apiSurveyQuestionDisplayCondition.parent) surveyQuestionDisplayCondition.parent = SurveyQuestionDisplayCondition.fromApiEntity(apiSurveyQuestionDisplayCondition.parent);

    return surveyQuestionDisplayCondition;
  }
}

export default SurveyQuestionDisplayCondition;

export type SurveyQuestionDisplayConditionType = {
  id: number,
  matchValue: string;
  matchType: LogicOperators;
  matchQuestion: SurveyAssociatedQuestion;
  question: SurveyAssociatedQuestion;
  parent: SurveyQuestionDisplayCondition;
}

