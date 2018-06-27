//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedProblemLoadSpan from './ArchivedProblemLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedProblemCorrespondenceLoadSpan extends LoadSpanBase {
  dateMessage: boolean;
  subject: boolean;
  priority: boolean;
  from: boolean;
  body: boolean;
  rep: boolean;
  problem: ArchivedProblemLoadSpan;

  constructor(){
    super();
    this.dateMessage = false;
    this.subject = false;
    this.priority = false;
    this.from = false;
    this.body = false;
    this.rep = false;
  }

  get problemLoadSpan(): ArchivedProblemLoadSpan {
    if(!this.problem){
		this.problem = new ArchivedProblemLoadSpan();
	}

    return this.problem;
  }

  loadAllProperties() {
    this.dateMessage = true;
    this.subject = true;
    this.priority = true;
    this.from = true;
    this.body = true;
    this.rep = true;
  }
}

export default ArchivedProblemCorrespondenceLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
