//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedCorrespondenceLoadSpan from './ArchivedCorrespondenceLoadSpan';

export class ArchivedCorrespondenceAttachmentLoadSpan {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  correspondence: ArchivedCorrespondenceLoadSpan;

  constructor(){
    this.fileName = false;
    this.fileData = false;
    this.fileType = false;
  }

  get correspondenceLoadSpan(): ArchivedCorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new ArchivedCorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileData = true;
    this.fileType = true;
  }
}

export default ArchivedCorrespondenceAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
