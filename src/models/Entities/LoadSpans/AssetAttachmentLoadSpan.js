//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class AssetAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileType: boolean;
  fileSize: boolean;
  fileData: boolean;
  assetGuid: boolean;

  constructor(){
    super();
    this.fileName = false;
    this.fileType = false;
    this.fileSize = false;
    this.fileData = false;
    this.assetGuid = false;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileType = true;
    this.fileSize = true;
    this.fileData = true;
    this.assetGuid = true;
  }
}

export default AssetAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
