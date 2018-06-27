//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedProblemCorrespondenceLoadSpan from './ArchivedProblemCorrespondenceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedProblemCorrespondenceAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  correspondence: ArchivedProblemCorrespondenceLoadSpan;

  constructor(){
    super();
    this.fileName = false;
    this.fileData = false;
    this.fileType = false;
  }

  get correspondenceLoadSpan(): ArchivedProblemCorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new ArchivedProblemCorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileData = true;
    this.fileType = true;
  }
}

export default ArchivedProblemCorrespondenceAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
