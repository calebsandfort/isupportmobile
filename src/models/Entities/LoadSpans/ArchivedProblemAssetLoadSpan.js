//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedProblemLoadSpan from './ArchivedProblemLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedProblemAssetLoadSpan extends LoadSpanBase {
  tagNumber: boolean;
  type: boolean;
  location: boolean;
  name: boolean;
  owner: boolean;
  problem: ArchivedProblemLoadSpan;

  constructor(){
    super();
    this.tagNumber = false;
    this.type = false;
    this.location = false;
    this.name = false;
    this.owner = false;
  }

  get problemLoadSpan(): ArchivedProblemLoadSpan {
    if(!this.problem){
		this.problem = new ArchivedProblemLoadSpan();
	}

    return this.problem;
  }

  loadAllProperties() {
    this.tagNumber = true;
    this.type = true;
    this.location = true;
    this.name = true;
    this.owner = true;
  }
}

export default ArchivedProblemAssetLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
