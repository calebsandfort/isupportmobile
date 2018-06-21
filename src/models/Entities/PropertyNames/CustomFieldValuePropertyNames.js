//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomFieldDefinitionPropertyNames from './CustomFieldDefinitionPropertyNames';

class CustomFieldValuePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get value (): string {
    return super.resolvePropertyName("Value");
  }
  get definition (): CustomFieldDefinitionPropertyNames {
    return new CustomFieldDefinitionPropertyNames(super.resolvePropertyName("Definition"));
  }
}

export default CustomFieldValuePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
