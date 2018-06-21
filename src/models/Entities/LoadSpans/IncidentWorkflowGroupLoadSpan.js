//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import IncidentLoadSpan from './IncidentLoadSpan';

export class IncidentWorkflowGroupLoadSpan {
  workflowGroupGuid: boolean;
  incident: IncidentLoadSpan;

  constructor(){
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
