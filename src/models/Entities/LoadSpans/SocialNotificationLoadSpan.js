//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';
import SocialClientOptionsLoadSpan from './SocialClientOptionsLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class SocialNotificationLoadSpan extends LoadSpanBase {
  number: boolean;
  customerNotificationTypes: boolean;
  customer: CustomerLoadSpan;
  socialClientOptions: SocialClientOptionsLoadSpan;

  constructor(){
    super();
    this.number = false;
    this.customerNotificationTypes = false;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get socialClientOptionsLoadSpan(): SocialClientOptionsLoadSpan {
    if(!this.socialClientOptions){
		this.socialClientOptions = new SocialClientOptionsLoadSpan();
	}

    return this.socialClientOptions;
  }

  loadAllProperties() {
    this.number = true;
    this.customerNotificationTypes = true;
  }
}

export default SocialNotificationLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
