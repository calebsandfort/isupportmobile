//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomFieldDefinitionLoadSpan from './CustomFieldDefinitionLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class CustomFieldValueLoadSpan extends LoadSpanBase {
  value: boolean;
  definition: CustomFieldDefinitionLoadSpan;

  constructor(){
    super();
    this.value = false;
  }

  get definitionLoadSpan(): CustomFieldDefinitionLoadSpan {
    if(!this.definition){
		this.definition = new CustomFieldDefinitionLoadSpan();
	}

    return this.definition;
  }

  loadAllProperties() {
    this.value = true;
  }
}

export default CustomFieldValueLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
