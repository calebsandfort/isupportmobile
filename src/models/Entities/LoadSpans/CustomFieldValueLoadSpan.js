//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomFieldDefinitionLoadSpan from './CustomFieldDefinitionLoadSpan';

export class CustomFieldValueLoadSpan {
  value: boolean;
  definition: CustomFieldDefinitionLoadSpan;

  constructor(){
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
