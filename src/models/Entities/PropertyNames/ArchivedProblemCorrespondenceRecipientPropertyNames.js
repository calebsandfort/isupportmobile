//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedProblemCorrespondencePropertyNames from './ArchivedProblemCorrespondencePropertyNames';

class ArchivedProblemCorrespondenceRecipientPropertyNames extends PropertyNamesBase {
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
  get correspondence (): ArchivedProblemCorrespondencePropertyNames {
    return new ArchivedProblemCorrespondencePropertyNames(super.resolvePropertyName("Correspondence"));
  }
}

export default ArchivedProblemCorrespondenceRecipientPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
