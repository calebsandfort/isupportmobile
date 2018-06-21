//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SurveyPropertyNames from './SurveyPropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';

class SurveyRequestPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get guid (): string {
    return super.resolvePropertyName("Guid");
  }
  get incidentNumber (): string {
    return super.resolvePropertyName("IncidentNumber");
  }
  get dateSent (): string {
    return super.resolvePropertyName("DateSent");
  }
  get pendingDeletion (): string {
    return super.resolvePropertyName("PendingDeletion");
  }
  get method (): string {
    return super.resolvePropertyName("Method");
  }
  get status (): string {
    return super.resolvePropertyName("Status");
  }
  get survey (): SurveyPropertyNames {
    return new SurveyPropertyNames(super.resolvePropertyName("Survey"));
  }
  get recipient (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Recipient"));
  }
}

export default SurveyRequestPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
