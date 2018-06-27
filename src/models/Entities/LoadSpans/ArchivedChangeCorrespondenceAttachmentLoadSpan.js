//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedChangeCorrespondenceLoadSpan from './ArchivedChangeCorrespondenceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedChangeCorrespondenceAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  correspondence: ArchivedChangeCorrespondenceLoadSpan;

  constructor(){
    super();
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
