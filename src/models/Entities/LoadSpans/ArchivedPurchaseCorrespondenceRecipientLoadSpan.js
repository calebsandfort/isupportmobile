//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedPurchaseCorrespondenceLoadSpan from './ArchivedPurchaseCorrespondenceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedPurchaseCorrespondenceRecipientLoadSpan extends LoadSpanBase {
  name: boolean;
  type: boolean;
  correspondence: ArchivedPurchaseCorrespondenceLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.type = false;
  }

  get correspondenceLoadSpan(): ArchivedPurchaseCorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new ArchivedPurchaseCorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.name = true;
    this.type = true;
  }
}

export default ArchivedPurchaseCorrespondenceRecipientLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
