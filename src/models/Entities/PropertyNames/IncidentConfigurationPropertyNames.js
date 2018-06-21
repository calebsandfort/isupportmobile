//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import UrgencyImpactMappingPropertyNames from './UrgencyImpactMappingPropertyNames';
import IncidentStatusPropertyNames from './IncidentStatusPropertyNames';
import WorkHistoryTypePropertyNames from './WorkHistoryTypePropertyNames';

class IncidentConfigurationPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get categoryEnabled (): string {
    return super.resolvePropertyName("CategoryEnabled");
  }
  get categoryDepth (): string {
    return super.resolvePropertyName("CategoryDepth");
  }
  get approvalsEnabled (): string {
    return super.resolvePropertyName("ApprovalsEnabled");
  }
  get assignmentDefaultOwnerID (): string {
    return super.resolvePropertyName("AssignmentDefaultOwnerID");
  }
  get customerWorkHistoryEnabled (): string {
    return super.resolvePropertyName("CustomerWorkHistoryEnabled");
  }
  get mappingEnabled (): string {
    return super.resolvePropertyName("MappingEnabled");
  }
  get shortDescriptionEnabled (): string {
    return super.resolvePropertyName("ShortDescriptionEnabled");
  }
  get shortDescriptionRequired (): string {
    return super.resolvePropertyName("ShortDescriptionRequired");
  }
  get workHistoryTypeFieldEnabled (): string {
    return super.resolvePropertyName("WorkHistoryTypeFieldEnabled");
  }
  get workHistoryStartStopFieldsEnabled (): string {
    return super.resolvePropertyName("WorkHistoryStartStopFieldsEnabled");
  }
  get defaultPriority (): string {
    return super.resolvePropertyName("DefaultPriority");
  }
  get assignmentDefaultOwnerType (): string {
    return super.resolvePropertyName("AssignmentDefaultOwnerType");
  }
  get customerWorkHistoryPostMethod (): string {
    return super.resolvePropertyName("CustomerWorkHistoryPostMethod");
  }
  get defaultMapping (): UrgencyImpactMappingPropertyNames {
    return new UrgencyImpactMappingPropertyNames(super.resolvePropertyName("DefaultMapping"));
  }
  get defaultIncidentStatus (): IncidentStatusPropertyNames {
    return new IncidentStatusPropertyNames(super.resolvePropertyName("DefaultIncidentStatus"));
  }
  get defaultWorkHistoryType (): WorkHistoryTypePropertyNames {
    return new WorkHistoryTypePropertyNames(super.resolvePropertyName("DefaultWorkHistoryType"));
  }
}

export default IncidentConfigurationPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
