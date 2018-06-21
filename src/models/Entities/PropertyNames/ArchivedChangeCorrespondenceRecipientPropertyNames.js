//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedChangeCorrespondencePropertyNames from './ArchivedChangeCorrespondencePropertyNames';

class ArchivedChangeCorrespondenceRecipientPropertyNames extends PropertyNamesBase {
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
  get correspondence (): ArchivedChangeCorrespondencePropertyNames {
    return new ArchivedChangeCorrespondencePropertyNames(super.resolvePropertyName("Correspondence"));
  }
}

export default ArchivedChangeCorrespondenceRecipientPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
