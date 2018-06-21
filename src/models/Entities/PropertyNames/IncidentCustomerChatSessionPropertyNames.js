//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import IncidentPropertyNames from './IncidentPropertyNames';

class IncidentCustomerChatSessionPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get rep (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Rep"));
  }
  get incident (): IncidentPropertyNames {
    return new IncidentPropertyNames(super.resolvePropertyName("Incident"));
  }
}

export default IncidentCustomerChatSessionPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
