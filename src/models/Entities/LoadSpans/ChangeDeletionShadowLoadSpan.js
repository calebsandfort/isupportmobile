//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class ChangeDeletionShadowLoadSpan extends LoadSpanBase {
  number: boolean;
  dateDeleted: boolean;
  deletedBy: boolean;
  originalIdentifier: boolean;

  constructor(){
    super();
    this.number = false;
    this.dateDeleted = false;
    this.deletedBy = false;
    this.originalIdentifier = false;
  }

  loadAllProperties() {
    this.number = true;
    this.dateDeleted = true;
    this.deletedBy = true;
    this.originalIdentifier = true;
  }
}

export default ChangeDeletionShadowLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
