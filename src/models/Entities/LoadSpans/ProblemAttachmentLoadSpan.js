//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class ProblemAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileType: boolean;
  fileSize: boolean;
  number: boolean;
  fileData: boolean;
  createdDate: boolean;

  constructor(){
    super();
    this.fileName = false;
    this.fileType = false;
    this.fileSize = false;
    this.number = false;
    this.fileData = false;
    this.createdDate = false;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileType = true;
    this.fileSize = true;
    this.number = true;
    this.fileData = true;
    this.createdDate = true;
  }
}

export default ProblemAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
