//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class AdditionalFollowupLoadSpan extends LoadSpanBase {
  date: boolean;
  note: boolean;
  rep: SupportRepresentativeLoadSpan;
  customer: CustomerLoadSpan;

  constructor(){
    super();
    this.date = false;
    this.note = false;
  }

  get repLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.rep){
		this.rep = new SupportRepresentativeLoadSpan();
	}

    return this.rep;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  loadAllProperties() {
    this.date = true;
    this.note = true;
  }
}

export default AdditionalFollowupLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
