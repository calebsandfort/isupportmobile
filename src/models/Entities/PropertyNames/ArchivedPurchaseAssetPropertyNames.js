//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedPurchasePropertyNames from './ArchivedPurchasePropertyNames';

class ArchivedPurchaseAssetPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get tagNumber (): string {
    return super.resolvePropertyName("TagNumber");
  }
  get type (): string {
    return super.resolvePropertyName("Type");
  }
  get location (): string {
    return super.resolvePropertyName("Location");
  }
  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get owner (): string {
    return super.resolvePropertyName("Owner");
  }
  get purchase (): ArchivedPurchasePropertyNames {
    return new ArchivedPurchasePropertyNames(super.resolvePropertyName("Purchase"));
  }
}

export default ArchivedPurchaseAssetPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
