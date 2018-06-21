//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import UrgencyPropertyNames from './UrgencyPropertyNames';
import ImpactPropertyNames from './ImpactPropertyNames';

class UrgencyImpactMappingPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get pendingDeletion (): string {
    return super.resolvePropertyName("PendingDeletion");
  }
  get priority (): string {
    return super.resolvePropertyName("Priority");
  }
  get urgency (): UrgencyPropertyNames {
    return new UrgencyPropertyNames(super.resolvePropertyName("Urgency"));
  }
  get impact (): ImpactPropertyNames {
    return new ImpactPropertyNames(super.resolvePropertyName("Impact"));
  }
}

export default UrgencyImpactMappingPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
