//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedProblemCorrespondenceLoadSpan from './ArchivedProblemCorrespondenceLoadSpan';

export class ArchivedProblemCorrespondenceAttachmentLoadSpan {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  correspondence: ArchivedProblemCorrespondenceLoadSpan;

  constructor(){
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
