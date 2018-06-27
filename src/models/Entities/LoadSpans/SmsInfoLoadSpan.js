//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class SmsInfoLoadSpan extends LoadSpanBase {
  address: boolean;
  activationCode: boolean;
  activated: boolean;

  constructor(){
    super();
    this.address = false;
    this.activationCode = false;
    this.activated = false;
  }

  loadAllProperties() {
    this.address = true;
    this.activationCode = true;
    this.activated = true;
  }
}

export default SmsInfoLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
