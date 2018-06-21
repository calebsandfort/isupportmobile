//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedPurchaseCorrespondencePropertyNames from './ArchivedPurchaseCorrespondencePropertyNames';

class ArchivedPurchaseCorrespondenceRecipientPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get type (): string {
    return super.resolvePropertyName("Type");
  }
  get correspondence (): ArchivedPurchaseCorrespondencePropertyNames {
    return new ArchivedPurchaseCorrespondencePropertyNames(super.resolvePropertyName("Correspondence"));
  }
}

export default ArchivedPurchaseCorrespondenceRecipientPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
