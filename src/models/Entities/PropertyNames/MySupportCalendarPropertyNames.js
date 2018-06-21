//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';
import AccessCirclePropertyNames from './AccessCirclePropertyNames';

class MySupportCalendarPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get repOwner (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("RepOwner"));
  }
  get customerOwner (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("CustomerOwner"));
  }
  get accessCircle (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("AccessCircle"));
  }
  get editAccessCircle (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("EditAccessCircle"));
  }
}

export default MySupportCalendarPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
