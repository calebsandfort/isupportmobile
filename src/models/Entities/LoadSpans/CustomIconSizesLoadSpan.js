//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomIconLoadSpan from './CustomIconLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class CustomIconSizesLoadSpan extends LoadSpanBase {
  iconData: boolean;
  iconSize: boolean;
  iconID: CustomIconLoadSpan;

  constructor(){
    super();
    this.iconData = false;
    this.iconSize = false;
  }

  get iconIDLoadSpan(): CustomIconLoadSpan {
    if(!this.iconID){
		this.iconID = new CustomIconLoadSpan();
	}

    return this.iconID;
  }

  loadAllProperties() {
    this.iconData = true;
    this.iconSize = true;
  }
}

export default CustomIconSizesLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
