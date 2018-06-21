//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedPurchaseCorrespondencePropertyNames from './ArchivedPurchaseCorrespondencePropertyNames';

class ArchivedPurchaseCorrespondenceAttachmentPropertyNames extends PropertyNamesBase {
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
  get correspondence (): ArchivedPurchaseCorrespondencePropertyNames {
    return new ArchivedPurchaseCorrespondencePropertyNames(super.resolvePropertyName("Correspondence"));
  }
}

export default ArchivedPurchaseCorrespondenceAttachmentPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
