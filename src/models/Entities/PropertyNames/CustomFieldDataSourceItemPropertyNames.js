//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomFieldDataSourcePropertyNames from './CustomFieldDataSourcePropertyNames';

class CustomFieldDataSourceItemPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get value (): string {
    return super.resolvePropertyName("Value");
  }
  get customFieldDataSource (): CustomFieldDataSourcePropertyNames {
    return new CustomFieldDataSourcePropertyNames(super.resolvePropertyName("CustomFieldDataSource"));
  }
}

export default CustomFieldDataSourceItemPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
