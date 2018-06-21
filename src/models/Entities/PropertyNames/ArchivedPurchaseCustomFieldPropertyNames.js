//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedPurchasePropertyNames from './ArchivedPurchasePropertyNames';

class ArchivedPurchaseCustomFieldPropertyNames extends PropertyNamesBase {
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
  get purchase (): ArchivedPurchasePropertyNames {
    return new ArchivedPurchasePropertyNames(super.resolvePropertyName("Purchase"));
  }
}

export default ArchivedPurchaseCustomFieldPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
