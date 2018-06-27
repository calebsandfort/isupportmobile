//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedChangeLoadSpan from './ArchivedChangeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedChangeAttachmentLoadSpan extends LoadSpanBase {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  change: ArchivedChangeLoadSpan;

  constructor(){
    super();
    this.fileName = false;
    this.fileData = false;
    this.fileType = false;
  }

  get changeLoadSpan(): ArchivedChangeLoadSpan {
    if(!this.change){
		this.change = new ArchivedChangeLoadSpan();
	}

    return this.change;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileData = true;
    this.fileType = true;
  }
}

export default ArchivedChangeAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
