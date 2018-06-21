//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';

export class LinkedOpenIdAccountLoadSpan {
  name: boolean;
  accountId: boolean;
  type: boolean;
  customer: CustomerLoadSpan;

  constructor(){
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
