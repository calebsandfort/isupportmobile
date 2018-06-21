//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedPurchaseCorrespondenceLoadSpan from './ArchivedPurchaseCorrespondenceLoadSpan';

export class ArchivedPurchaseCorrespondenceAttachmentLoadSpan {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  correspondence: ArchivedPurchaseCorrespondenceLoadSpan;

  constructor(){
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
