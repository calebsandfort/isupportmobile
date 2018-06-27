//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class LinkedOpenIdAccountLoadSpan extends LoadSpanBase {
  name: boolean;
  accountId: boolean;
  type: boolean;
  customer: CustomerLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.accountId = false;
    this.type = false;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  loadAllProperties() {
    this.name = true;
    this.accountId = true;
    this.type = true;
  }
}

export default LinkedOpenIdAccountLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
