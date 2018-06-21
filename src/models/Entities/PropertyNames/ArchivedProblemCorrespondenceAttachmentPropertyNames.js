//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedProblemCorrespondencePropertyNames from './ArchivedProblemCorrespondencePropertyNames';

class ArchivedProblemCorrespondenceAttachmentPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get fileName (): string {
    return super.resolvePropertyName("FileName");
  }
  get fileData (): string {
    return super.resolvePropertyName("FileData");
  }
  get fileType (): string {
    return super.resolvePropertyName("FileType");
  }
  get correspondence (): ArchivedProblemCorrespondencePropertyNames {
    return new ArchivedProblemCorrespondencePropertyNames(super.resolvePropertyName("Correspondence"));
  }
}

export default ArchivedProblemCorrespondenceAttachmentPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
