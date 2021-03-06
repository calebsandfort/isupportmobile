//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';

class IncidentCorrespondenceHistoryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get entry (): string {
    return super.resolvePropertyName("Entry");
  }
  get owner (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Owner"));
  }
}

export default IncidentCorrespondenceHistoryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
