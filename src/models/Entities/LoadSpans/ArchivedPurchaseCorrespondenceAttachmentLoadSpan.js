//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedPurchaseCorrespondenceLoadSpan from './ArchivedPurchaseCorrespondenceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedPurchaseCorrespondenceAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  correspondence: ArchivedPurchaseCorrespondenceLoadSpan;

  constructor(){
    super();
    this.fileName = false;
    this.fileData = false;
    this.fileType = false;
  }

  get correspondenceLoadSpan(): ArchivedPurchaseCorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new ArchivedPurchaseCorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileData = true;
    this.fileType = true;
  }
}

export default ArchivedPurchaseCorrespondenceAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
