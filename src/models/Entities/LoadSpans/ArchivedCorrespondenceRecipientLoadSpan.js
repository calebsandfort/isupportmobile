//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedCorrespondenceLoadSpan from './ArchivedCorrespondenceLoadSpan';

export class ArchivedCorrespondenceRecipientLoadSpan {
  name: boolean;
  type: boolean;
  correspondence: ArchivedCorrespondenceLoadSpan;

  constructor(){
    this.name = false;
    this.type = false;
  }

  get correspondenceLoadSpan(): ArchivedCorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new ArchivedCorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.name = true;
    this.type = true;
  }
}

export default ArchivedCorrespondenceRecipientLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
