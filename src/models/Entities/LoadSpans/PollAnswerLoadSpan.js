//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PollLoadSpan from './PollLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class PollAnswerLoadSpan extends LoadSpanBase {
  answer: boolean;
  poll: PollLoadSpan;

  constructor(){
    super();
    this.answer = false;
  }

  get pollLoadSpan(): PollLoadSpan {
    if(!this.poll){
		this.poll = new PollLoadSpan();
	}

    return this.poll;
  }

  loadAllProperties() {
    this.answer = true;
  }
}

export default PollAnswerLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
