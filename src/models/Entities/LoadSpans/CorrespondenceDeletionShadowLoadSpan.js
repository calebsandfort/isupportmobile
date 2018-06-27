//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class CorrespondenceDeletionShadowLoadSpan extends LoadSpanBase {
  subject: boolean;
  dateDeleted: boolean;
  deletedBy: boolean;
  originalIdentifier: boolean;
  sent: boolean;
  from: boolean;
  to: boolean;

  constructor(){
    super();
    this.subject = false;
    this.dateDeleted = false;
    this.deletedBy = false;
    this.originalIdentifier = false;
    this.sent = false;
    this.from = false;
    this.to = false;
  }

  loadAllProperties() {
    this.subject = true;
    this.dateDeleted = true;
    this.deletedBy = true;
    this.originalIdentifier = true;
    this.sent = true;
    this.from = true;
    this.to = true;
  }
}

export default CorrespondenceDeletionShadowLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
