//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SurveyQuestionLoadSpan from './SurveyQuestionLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class SurveyAssociatedQuestionLoadSpan extends LoadSpanBase {
  position: boolean;
  page: boolean;
  question: SurveyQuestionLoadSpan;

  constructor(){
    super();
    this.position = false;
    this.page = false;
  }

  get questionLoadSpan(): SurveyQuestionLoadSpan {
    if(!this.question){
		this.question = new SurveyQuestionLoadSpan();
	}

    return this.question;
  }

  loadAllProperties() {
    this.position = true;
    this.page = true;
  }
}

export default SurveyAssociatedQuestionLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
