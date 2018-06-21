//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedChangePropertyNames from './ArchivedChangePropertyNames';

class ArchivedChangeAttachmentPropertyNames extends PropertyNamesBase {
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
  get change (): ArchivedChangePropertyNames {
    return new ArchivedChangePropertyNames(super.resolvePropertyName("Change"));
  }
}

export default ArchivedChangeAttachmentPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
