//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SurveyLoadSpan from './SurveyLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';

export class SurveyRequestLoadSpan {
  guid: boolean;
  incidentNumber: boolean;
  dateSent: boolean;
  pendingDeletion: boolean;
  method: boolean;
  status: boolean;
  survey: SurveyLoadSpan;
  recipient: CustomerLoadSpan;

  constructor(){
    this.guid = false;
    this.incidentNumber = false;
    this.dateSent = false;
    this.pendingDeletion = false;
    this.method = false;
    this.status = false;
  }

  get surveyLoadSpan(): SurveyLoadSpan {
    if(!this.survey){
		this.survey = new SurveyLoadSpan();
	}

    return this.survey;
  }

  get recipientLoadSpan(): CustomerLoadSpan {
    if(!this.recipient){
		this.recipient = new CustomerLoadSpan();
	}

    return this.recipient;
  }

  loadAllProperties() {
    this.guid = true;
    this.incidentNumber = true;
    this.dateSent = true;
    this.pendingDeletion = true;
    this.method = true;
    this.status = true;
  }
}

export default SurveyRequestLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
