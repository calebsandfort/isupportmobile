//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import IncidentLoadSpan from './IncidentLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class IncidentWorkflowGroupLoadSpan extends LoadSpanBase {
  workflowGroupGuid: boolean;
  incident: IncidentLoadSpan;

  constructor(){
    super();
    this.workflowGroupGuid = false;
  }

  get incidentLoadSpan(): IncidentLoadSpan {
    if(!this.incident){
		this.incident = new IncidentLoadSpan();
	}

    return this.incident;
  }

  loadAllProperties() {
    this.workflowGroupGuid = true;
  }
}

export default IncidentWorkflowGroupLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
