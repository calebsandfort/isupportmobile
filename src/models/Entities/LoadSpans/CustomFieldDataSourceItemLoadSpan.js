//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomFieldDataSourceLoadSpan from './CustomFieldDataSourceLoadSpan';

export class CustomFieldDataSourceItemLoadSpan {
  value: boolean;
  customFieldDataSource: CustomFieldDataSourceLoadSpan;

  constructor(){
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
