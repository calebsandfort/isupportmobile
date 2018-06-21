//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedProblemCorrespondenceLoadSpan from './ArchivedProblemCorrespondenceLoadSpan';

export class ArchivedProblemCorrespondenceRecipientLoadSpan {
  name: boolean;
  type: boolean;
  correspondence: ArchivedProblemCorrespondenceLoadSpan;

  constructor(){
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
