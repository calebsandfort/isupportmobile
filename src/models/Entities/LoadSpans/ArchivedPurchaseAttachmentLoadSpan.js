//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedPurchaseLoadSpan from './ArchivedPurchaseLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedPurchaseAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  purchase: ArchivedPurchaseLoadSpan;

  constructor(){
    super();
    this.fileName = false;
    this.fileData = false;
    this.fileType = false;
  }

  get purchaseLoadSpan(): ArchivedPurchaseLoadSpan {
    if(!this.purchase){
		this.purchase = new ArchivedPurchaseLoadSpan();
	}

    return this.purchase;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileData = true;
    this.fileType = true;
  }
}

export default ArchivedPurchaseAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
