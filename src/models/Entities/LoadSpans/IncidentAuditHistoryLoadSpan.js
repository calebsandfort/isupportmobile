//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class IncidentAuditHistoryLoadSpan extends LoadSpanBase {
  createdDate: boolean;
  entry: boolean;
  incidentNumber: boolean;
  owner: SupportRepresentativeLoadSpan;
  customerOwner: CustomerLoadSpan;

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

  get customerOwnerLoadSpan(): CustomerLoadSpan {
    if(!this.customerOwner){
		this.customerOwner = new CustomerLoadSpan();
	}

    return this.customerOwner;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
    this.incidentNumber = true;
  }
}

export default IncidentAuditHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
