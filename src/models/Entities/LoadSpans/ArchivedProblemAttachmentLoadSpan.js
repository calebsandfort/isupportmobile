//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedProblemLoadSpan from './ArchivedProblemLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedProblemAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  problem: ArchivedProblemLoadSpan;

  constructor(){
    super();
    this.fileName = false;
    this.fileData = false;
    this.fileType = false;
  }

  get problemLoadSpan(): ArchivedProblemLoadSpan {
    if(!this.problem){
		this.problem = new ArchivedProblemLoadSpan();
	}

    return this.problem;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileData = true;
    this.fileType = true;
  }
}

export default ArchivedProblemAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
