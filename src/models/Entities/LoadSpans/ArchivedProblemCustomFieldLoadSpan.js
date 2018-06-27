//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedProblemLoadSpan from './ArchivedProblemLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedProblemCustomFieldLoadSpan extends LoadSpanBase {
  value: boolean;
  label: boolean;
  problem: ArchivedProblemLoadSpan;

  constructor(){
    super();
    this.value = false;
    this.label = false;
  }

  get problemLoadSpan(): ArchivedProblemLoadSpan {
    if(!this.problem){
		this.problem = new ArchivedProblemLoadSpan();
	}

    return this.problem;
  }

  loadAllProperties() {
    this.value = true;
    this.label = true;
  }
}

export default ArchivedProblemCustomFieldLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
