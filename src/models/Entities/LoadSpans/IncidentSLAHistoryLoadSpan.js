//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class IncidentSLAHistoryLoadSpan extends LoadSpanBase {
  createdDate: boolean;
  entry: boolean;
  incidentNumber: boolean;
  owner: SupportRepresentativeLoadSpan;

  constructor(){
    super();
    this.createdDate = false;
    this.entry = false;
    this.incidentNumber = false;
  }

  get ownerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.owner){
		this.owner = new SupportRepresentativeLoadSpan();
	}

    return this.owner;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
    this.incidentNumber = true;
  }
}

export default IncidentSLAHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
