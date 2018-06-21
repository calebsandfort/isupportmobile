//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedChangePropertyNames from './ArchivedChangePropertyNames';

class ArchivedChangeCustomFieldPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get value (): string {
    return super.resolvePropertyName("Value");
  }
  get label (): string {
    return super.resolvePropertyName("Label");
  }
  get change (): ArchivedChangePropertyNames {
    return new ArchivedChangePropertyNames(super.resolvePropertyName("Change"));
  }
}

export default ArchivedChangeCustomFieldPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
