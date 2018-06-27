//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedIncidentLoadSpan from './ArchivedIncidentLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedAssetLoadSpan extends LoadSpanBase {
  tagNumber: boolean;
  type: boolean;
  location: boolean;
  name: boolean;
  owner: boolean;
  incident: ArchivedIncidentLoadSpan;

  constructor(){
    super();
    this.tagNumber = false;
    this.type = false;
    this.location = false;
    this.name = false;
    this.owner = false;
  }

  get incidentLoadSpan(): ArchivedIncidentLoadSpan {
    if(!this.incident){
		this.incident = new ArchivedIncidentLoadSpan();
	}

    return this.incident;
  }

  loadAllProperties() {
    this.tagNumber = true;
    this.type = true;
    this.location = true;
    this.name = true;
    this.owner = true;
  }
}

export default ArchivedAssetLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
