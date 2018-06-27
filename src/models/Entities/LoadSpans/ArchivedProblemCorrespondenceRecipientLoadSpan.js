//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedProblemCorrespondenceLoadSpan from './ArchivedProblemCorrespondenceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedProblemCorrespondenceRecipientLoadSpan extends LoadSpanBase {
  name: boolean;
  type: boolean;
  correspondence: ArchivedProblemCorrespondenceLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.type = false;
  }

  get correspondenceLoadSpan(): ArchivedProblemCorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new ArchivedProblemCorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.name = true;
    this.type = true;
  }
}

export default ArchivedProblemCorrespondenceRecipientLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
