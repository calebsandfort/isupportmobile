//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';

class AcknowledgmentPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get acknowledgmentDate (): string {
    return super.resolvePropertyName("AcknowledgmentDate");
  }
  get acknowledgmentRep (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("AcknowledgmentRep"));
  }
}

export default AcknowledgmentPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
