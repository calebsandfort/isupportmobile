//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedIncidentLoadSpan from './ArchivedIncidentLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedCustomFieldLoadSpan extends LoadSpanBase {
  value: boolean;
  label: boolean;
  incident: ArchivedIncidentLoadSpan;

  constructor(){
    super();
    this.value = false;
    this.label = false;
  }

  get incidentLoadSpan(): ArchivedIncidentLoadSpan {
    if(!this.incident){
		this.incident = new ArchivedIncidentLoadSpan();
	}

    return this.incident;
  }

  loadAllProperties() {
    this.value = true;
    this.label = true;
  }
}

export default ArchivedCustomFieldLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
