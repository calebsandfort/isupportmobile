//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedChangeLoadSpan from './ArchivedChangeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedChangeAssetLoadSpan extends LoadSpanBase {
  tagNumber: boolean;
  type: boolean;
  location: boolean;
  name: boolean;
  owner: boolean;
  change: ArchivedChangeLoadSpan;

  constructor(){
    super();
    this.tagNumber = false;
    this.type = false;
    this.location = false;
    this.name = false;
    this.owner = false;
  }

  get changeLoadSpan(): ArchivedChangeLoadSpan {
    if(!this.change){
		this.change = new ArchivedChangeLoadSpan();
	}

    return this.change;
  }

  loadAllProperties() {
    this.tagNumber = true;
    this.type = true;
    this.location = true;
    this.name = true;
    this.owner = true;
  }
}

export default ArchivedChangeAssetLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
