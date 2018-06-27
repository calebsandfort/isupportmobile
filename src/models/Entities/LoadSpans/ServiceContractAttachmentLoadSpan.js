//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class ServiceContractAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileType: boolean;
  fileSize: boolean;
  fileData: boolean;
  createdDate: boolean;
  guid: boolean;

  constructor(){
    super();
    this.fileName = false;
    this.fileType = false;
    this.fileSize = false;
    this.fileData = false;
    this.createdDate = false;
    this.guid = false;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileType = true;
    this.fileSize = true;
    this.fileData = true;
    this.createdDate = true;
    this.guid = true;
  }
}

export default ServiceContractAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
