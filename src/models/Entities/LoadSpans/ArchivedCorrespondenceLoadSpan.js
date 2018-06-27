//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedIncidentLoadSpan from './ArchivedIncidentLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedCorrespondenceLoadSpan extends LoadSpanBase {
  oldEmailId: boolean;
  dateMessage: boolean;
  subject: boolean;
  priority: boolean;
  from: boolean;
  body: boolean;
  rep: boolean;
  incident: ArchivedIncidentLoadSpan;

  constructor(){
    super();
    this.oldEmailId = false;
    this.dateMessage = false;
    this.subject = false;
    this.priority = false;
    this.from = false;
    this.body = false;
    this.rep = false;
  }

  get incidentLoadSpan(): ArchivedIncidentLoadSpan {
    if(!this.incident){
		this.incident = new ArchivedIncidentLoadSpan();
	}

    return this.incident;
  }

  loadAllProperties() {
    this.oldEmailId = true;
    this.dateMessage = true;
    this.subject = true;
    this.priority = true;
    this.from = true;
    this.body = true;
    this.rep = true;
  }
}

export default ArchivedCorrespondenceLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
