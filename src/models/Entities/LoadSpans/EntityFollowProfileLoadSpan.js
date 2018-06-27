//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import NewsFeedOptionsLoadSpan from './NewsFeedOptionsLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class EntityFollowProfileLoadSpan extends LoadSpanBase {
  entityType: boolean;
  newsFeedOptions: NewsFeedOptionsLoadSpan;

  constructor(){
    super();
    this.entityType = false;
  }

  get newsFeedOptionsLoadSpan(): NewsFeedOptionsLoadSpan {
    if(!this.newsFeedOptions){
		this.newsFeedOptions = new NewsFeedOptionsLoadSpan();
	}

    return this.newsFeedOptions;
  }

  loadAllProperties() {
    this.entityType = true;
  }
}

export default EntityFollowProfileLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
