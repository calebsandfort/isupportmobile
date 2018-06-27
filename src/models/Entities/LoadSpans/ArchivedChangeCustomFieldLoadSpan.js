//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedChangeLoadSpan from './ArchivedChangeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedChangeCustomFieldLoadSpan extends LoadSpanBase {
  value: boolean;
  label: boolean;
  change: ArchivedChangeLoadSpan;

  constructor(){
    super();
    this.value = false;
    this.label = false;
  }

  get changeLoadSpan(): ArchivedChangeLoadSpan {
    if(!this.change){
		this.change = new ArchivedChangeLoadSpan();
	}

    return this.change;
  }

  loadAllProperties() {
    this.value = true;
    this.label = true;
  }
}

export default ArchivedChangeCustomFieldLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
