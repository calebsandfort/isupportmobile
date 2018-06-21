//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PollLoadSpan from './PollLoadSpan';

export class PollAnswerLoadSpan {
  answer: boolean;
  poll: PollLoadSpan;

  constructor(){
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
