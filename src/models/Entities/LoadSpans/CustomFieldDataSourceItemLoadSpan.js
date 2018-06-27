//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomFieldDataSourceLoadSpan from './CustomFieldDataSourceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class CustomFieldDataSourceItemLoadSpan extends LoadSpanBase {
  value: boolean;
  customFieldDataSource: CustomFieldDataSourceLoadSpan;

  constructor(){
    super();
    this.value = false;
  }

  get customFieldDataSourceLoadSpan(): CustomFieldDataSourceLoadSpan {
    if(!this.customFieldDataSource){
		this.customFieldDataSource = new CustomFieldDataSourceLoadSpan();
	}

    return this.customFieldDataSource;
  }

  loadAllProperties() {
    this.value = true;
  }
}

export default CustomFieldDataSourceItemLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
