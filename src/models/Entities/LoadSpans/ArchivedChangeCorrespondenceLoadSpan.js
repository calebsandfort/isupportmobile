//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedChangeLoadSpan from './ArchivedChangeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedChangeCorrespondenceLoadSpan extends LoadSpanBase {
  dateMessage: boolean;
  subject: boolean;
  priority: boolean;
  from: boolean;
  body: boolean;
  rep: boolean;
  change: ArchivedChangeLoadSpan;

  constructor(){
    super();
    this.dateMessage = false;
    this.subject = false;
    this.priority = false;
    this.from = false;
    this.body = false;
    this.rep = false;
  }

  get changeLoadSpan(): ArchivedChangeLoadSpan {
    if(!this.change){
		this.change = new ArchivedChangeLoadSpan();
	}

    return this.change;
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

export default ArchivedChangeCorrespondenceLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
