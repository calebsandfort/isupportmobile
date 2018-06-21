//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedProblemPropertyNames from './ArchivedProblemPropertyNames';

class ArchivedProblemAttachmentPropertyNames extends PropertyNamesBase {
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
  get problem (): ArchivedProblemPropertyNames {
    return new ArchivedProblemPropertyNames(super.resolvePropertyName("Problem"));
  }
}

export default ArchivedProblemAttachmentPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
