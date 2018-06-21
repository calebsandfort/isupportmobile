//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import IncidentCustomerChatSessionPropertyNames from './IncidentCustomerChatSessionPropertyNames';

class IncidentCustomerChatHistoryPropertyNames extends PropertyNamesBase {
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
  get repIsSender (): string {
    return super.resolvePropertyName("RepIsSender");
  }
  get isFromSystem (): string {
    return super.resolvePropertyName("IsFromSystem");
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get rep (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Rep"));
  }
  get session (): IncidentCustomerChatSessionPropertyNames {
    return new IncidentCustomerChatSessionPropertyNames(super.resolvePropertyName("Session"));
  }
}

export default IncidentCustomerChatHistoryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
