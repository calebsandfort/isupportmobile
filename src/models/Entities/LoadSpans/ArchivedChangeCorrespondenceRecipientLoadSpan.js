//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedChangeCorrespondenceLoadSpan from './ArchivedChangeCorrespondenceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedChangeCorrespondenceRecipientLoadSpan extends LoadSpanBase {
  name: boolean;
  type: boolean;
  correspondence: ArchivedChangeCorrespondenceLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.type = false;
  }

  get correspondenceLoadSpan(): ArchivedChangeCorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new ArchivedChangeCorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.name = true;
    this.type = true;
  }
}

export default ArchivedChangeCorrespondenceRecipientLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
