//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedChangeCorrespondenceLoadSpan from './ArchivedChangeCorrespondenceLoadSpan';

export class ArchivedChangeCorrespondenceAttachmentLoadSpan {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  correspondence: ArchivedChangeCorrespondenceLoadSpan;

  constructor(){
    this.fileName = false;
    this.fileData = false;
    this.fileType = false;
  }

  get correspondenceLoadSpan(): ArchivedChangeCorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new ArchivedChangeCorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileData = true;
    this.fileType = true;
  }
}

export default ArchivedChangeCorrespondenceAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
