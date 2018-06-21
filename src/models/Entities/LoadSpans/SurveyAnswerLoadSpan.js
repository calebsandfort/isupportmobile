//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SurveyLoadSpan from './SurveyLoadSpan';
import SurveyQuestionLoadSpan from './SurveyQuestionLoadSpan';
import SurveyRequestLoadSpan from './SurveyRequestLoadSpan';

export class SurveyAnswerLoadSpan {
  response: boolean;
  dateSubmitted: boolean;
  survey: SurveyLoadSpan;
  question: SurveyQuestionLoadSpan;
  request: SurveyRequestLoadSpan;

  constructor(){
    this.response = false;
    this.dateSubmitted = false;
  }

  get surveyLoadSpan(): SurveyLoadSpan {
    if(!this.survey){
		this.survey = new SurveyLoadSpan();
	}

    return this.survey;
  }

  get questionLoadSpan(): SurveyQuestionLoadSpan {
    if(!this.question){
		this.question = new SurveyQuestionLoadSpan();
	}

    return this.question;
  }

  get requestLoadSpan(): SurveyRequestLoadSpan {
    if(!this.request){
		this.request = new SurveyRequestLoadSpan();
	}

    return this.request;
  }

  loadAllProperties() {
    this.response = true;
    this.dateSubmitted = true;
  }
}

export default SurveyAnswerLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
