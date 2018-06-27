//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class RepRefreshTokenLoadSpan extends LoadSpanBase {
  refreshTokenId: boolean;
  subject: boolean;
  protectedTicket: boolean;

  constructor(){
    super();
    this.refreshTokenId = false;
    this.subject = false;
    this.protectedTicket = false;
  }

  loadAllProperties() {
    this.refreshTokenId = true;
    this.subject = true;
    this.protectedTicket = true;
  }
}

export default RepRefreshTokenLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
