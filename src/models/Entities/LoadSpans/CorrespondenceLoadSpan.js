//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class CorrespondenceLoadSpan extends LoadSpanBase {
  sent: boolean;
  body: boolean;
  guid: boolean;
  customer: CustomerLoadSpan;

  constructor(){
    super();
    this.sent = false;
    this.body = false;
    this.guid = false;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  loadAllProperties() {
    this.sent = true;
    this.body = true;
    this.guid = true;
  }
}

export default CorrespondenceLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
