//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SurveyAssociatedQuestionLoadSpan from './SurveyAssociatedQuestionLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class SurveyQuestionDisplayConditionLoadSpan extends LoadSpanBase {
  matchValue: boolean;
  matchType: boolean;
  matchQuestion: SurveyAssociatedQuestionLoadSpan;
  question: SurveyAssociatedQuestionLoadSpan;
  parent: SurveyQuestionDisplayConditionLoadSpan;

  constructor(){
    super();
    this.matchValue = false;
    this.matchType = false;
  }

  get matchQuestionLoadSpan(): SurveyAssociatedQuestionLoadSpan {
    if(!this.matchQuestion){
		this.matchQuestion = new SurveyAssociatedQuestionLoadSpan();
	}

    return this.matchQuestion;
  }

  get questionLoadSpan(): SurveyAssociatedQuestionLoadSpan {
    if(!this.question){
		this.question = new SurveyAssociatedQuestionLoadSpan();
	}

    return this.question;
  }

  get parentLoadSpan(): SurveyQuestionDisplayConditionLoadSpan {
    if(!this.parent){
		this.parent = new SurveyQuestionDisplayConditionLoadSpan();
	}

    return this.parent;
  }

  loadAllProperties() {
    this.matchValue = true;
    this.matchType = true;
  }
}

export default SurveyQuestionDisplayConditionLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
