//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ServiceContractAuditHistoryLoadSpan extends LoadSpanBase {
  createdDate: boolean;
  entry: boolean;
  owner: SupportRepresentativeLoadSpan;

  constructor(){
    super();
    this.createdDate = false;
    this.entry = false;
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
  }
}

export default ServiceContractAuditHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
