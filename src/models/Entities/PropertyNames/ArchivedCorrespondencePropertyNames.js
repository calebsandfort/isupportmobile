//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedIncidentPropertyNames from './ArchivedIncidentPropertyNames';

class ArchivedCorrespondencePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get oldEmailId (): string {
    return super.resolvePropertyName("OldEmailId");
  }
  get dateMessage (): string {
    return super.resolvePropertyName("DateMessage");
  }
  get subject (): string {
    return super.resolvePropertyName("Subject");
  }
  get priority (): string {
    return super.resolvePropertyName("Priority");
  }
  get from (): string {
    return super.resolvePropertyName("From");
  }
  get body (): string {
    return super.resolvePropertyName("Body");
  }
  get rep (): string {
    return super.resolvePropertyName("Rep");
  }
  get incident (): ArchivedIncidentPropertyNames {
    return new ArchivedIncidentPropertyNames(super.resolvePropertyName("Incident"));
  }
}

export default ArchivedCorrespondencePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
