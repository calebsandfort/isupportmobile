//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedCorrespondenceLoadSpan from './ArchivedCorrespondenceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedCorrespondenceAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  correspondence: ArchivedCorrespondenceLoadSpan;

  constructor(){
    super();
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
