//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedCorrespondencePropertyNames from './ArchivedCorrespondencePropertyNames';

class ArchivedCorrespondenceRecipientPropertyNames extends PropertyNamesBase {
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
  get correspondence (): ArchivedCorrespondencePropertyNames {
    return new ArchivedCorrespondencePropertyNames(super.resolvePropertyName("Correspondence"));
  }
}

export default ArchivedCorrespondenceRecipientPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
