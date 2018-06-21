//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SurveyPropertyNames from './SurveyPropertyNames';
import SurveyQuestionPropertyNames from './SurveyQuestionPropertyNames';
import SurveyRequestPropertyNames from './SurveyRequestPropertyNames';

class SurveyAnswerPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get response (): string {
    return super.resolvePropertyName("Response");
  }
  get dateSubmitted (): string {
    return super.resolvePropertyName("DateSubmitted");
  }
  get survey (): SurveyPropertyNames {
    return new SurveyPropertyNames(super.resolvePropertyName("Survey"));
  }
  get question (): SurveyQuestionPropertyNames {
    return new SurveyQuestionPropertyNames(super.resolvePropertyName("Question"));
  }
  get request (): SurveyRequestPropertyNames {
    return new SurveyRequestPropertyNames(super.resolvePropertyName("Request"));
  }
}

export default SurveyAnswerPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
