//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';

class IncidentAuditHistoryPropertyNames extends PropertyNamesBase {
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
  get incidentNumber (): string {
    return super.resolvePropertyName("IncidentNumber");
  }
  get owner (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Owner"));
  }
  get customerOwner (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("CustomerOwner"));
  }
}

export default IncidentAuditHistoryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
