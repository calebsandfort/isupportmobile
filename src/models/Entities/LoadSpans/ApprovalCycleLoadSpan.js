//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class ApprovalCycleLoadSpan extends LoadSpanBase {
  name: boolean;
  description: boolean;
  numberOfVerdictsToApprove: boolean;
  numberOfVerdictsToDecline: boolean;
  notificationOrderType: boolean;

  constructor(){
    super();
    this.name = false;
    this.description = false;
    this.numberOfVerdictsToApprove = false;
    this.numberOfVerdictsToDecline = false;
    this.notificationOrderType = false;
  }

  loadAllProperties() {
    this.name = true;
    this.description = true;
    this.numberOfVerdictsToApprove = true;
    this.numberOfVerdictsToDecline = true;
    this.notificationOrderType = true;
  }
}

export default ApprovalCycleLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
