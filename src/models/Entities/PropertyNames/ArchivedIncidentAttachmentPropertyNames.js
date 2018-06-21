//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedIncidentPropertyNames from './ArchivedIncidentPropertyNames';

class ArchivedIncidentAttachmentPropertyNames extends PropertyNamesBase {
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
  get incident (): ArchivedIncidentPropertyNames {
    return new ArchivedIncidentPropertyNames(super.resolvePropertyName("Incident"));
  }
}

export default ArchivedIncidentAttachmentPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
