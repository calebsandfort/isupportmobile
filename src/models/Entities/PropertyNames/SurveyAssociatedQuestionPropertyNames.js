//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SurveyQuestionPropertyNames from './SurveyQuestionPropertyNames';

class SurveyAssociatedQuestionPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get position (): string {
    return super.resolvePropertyName("Position");
  }
  get page (): string {
    return super.resolvePropertyName("Page");
  }
  get question (): SurveyQuestionPropertyNames {
    return new SurveyQuestionPropertyNames(super.resolvePropertyName("Question"));
  }
}

export default SurveyAssociatedQuestionPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
