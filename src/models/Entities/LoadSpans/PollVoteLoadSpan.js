//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PollAnswerLoadSpan from './PollAnswerLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class PollVoteLoadSpan extends LoadSpanBase {
  date: boolean;
  answer: PollAnswerLoadSpan;
  customer: CustomerLoadSpan;
  rep: SupportRepresentativeLoadSpan;

  constructor(){
    super();
    this.date = false;
  }

  get answerLoadSpan(): PollAnswerLoadSpan {
    if(!this.answer){
		this.answer = new PollAnswerLoadSpan();
	}

    return this.answer;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get repLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.rep){
		this.rep = new SupportRepresentativeLoadSpan();
	}

    return this.rep;
  }

  loadAllProperties() {
    this.date = true;
  }
}

export default PollVoteLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
