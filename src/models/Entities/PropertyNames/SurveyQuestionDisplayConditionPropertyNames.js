//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SurveyAssociatedQuestionPropertyNames from './SurveyAssociatedQuestionPropertyNames';

class SurveyQuestionDisplayConditionPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get matchValue (): string {
    return super.resolvePropertyName("MatchValue");
  }
  get matchType (): string {
    return super.resolvePropertyName("MatchType");
  }
  get matchQuestion (): SurveyAssociatedQuestionPropertyNames {
    return new SurveyAssociatedQuestionPropertyNames(super.resolvePropertyName("MatchQuestion"));
  }
  get question (): SurveyAssociatedQuestionPropertyNames {
    return new SurveyAssociatedQuestionPropertyNames(super.resolvePropertyName("Question"));
  }
  get parent (): SurveyQuestionDisplayConditionPropertyNames {
    return new SurveyQuestionDisplayConditionPropertyNames(super.resolvePropertyName("Parent"));
  }
}

export default SurveyQuestionDisplayConditionPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
