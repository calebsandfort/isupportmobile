//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedPurchasePropertyNames from './ArchivedPurchasePropertyNames';

class ArchivedPurchaseAttachmentPropertyNames extends PropertyNamesBase {
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
  get purchase (): ArchivedPurchasePropertyNames {
    return new ArchivedPurchasePropertyNames(super.resolvePropertyName("Purchase"));
  }
}

export default ArchivedPurchaseAttachmentPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
