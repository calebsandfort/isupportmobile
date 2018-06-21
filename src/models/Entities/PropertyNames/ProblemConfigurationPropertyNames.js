//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import UrgencyImpactMappingPropertyNames from './UrgencyImpactMappingPropertyNames';
import ProblemStatusPropertyNames from './ProblemStatusPropertyNames';
import IncidentStatusPropertyNames from './IncidentStatusPropertyNames';
import WorkHistoryTypePropertyNames from './WorkHistoryTypePropertyNames';

class ProblemConfigurationPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get setAssigneeAsAuthor (): string {
    return super.resolvePropertyName("SetAssigneeAsAuthor");
  }
  get workHistoryTimeRequired (): string {
    return super.resolvePropertyName("WorkHistoryTimeRequired");
  }
  get workHistoryTypeFieldEnabled (): string {
    return super.resolvePropertyName("WorkHistoryTypeFieldEnabled");
  }
  get workHistoryStartStopFieldsEnabled (): string {
    return super.resolvePropertyName("WorkHistoryStartStopFieldsEnabled");
  }
  get defaultAssignee (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("DefaultAssignee"));
  }
  get defaultMapping (): UrgencyImpactMappingPropertyNames {
    return new UrgencyImpactMappingPropertyNames(super.resolvePropertyName("DefaultMapping"));
  }
  get defaultStatus (): ProblemStatusPropertyNames {
    return new ProblemStatusPropertyNames(super.resolvePropertyName("DefaultStatus"));
  }
  get incidentClosureStatus (): IncidentStatusPropertyNames {
    return new IncidentStatusPropertyNames(super.resolvePropertyName("IncidentClosureStatus"));
  }
  get defaultWorkHistoryType (): WorkHistoryTypePropertyNames {
    return new WorkHistoryTypePropertyNames(super.resolvePropertyName("DefaultWorkHistoryType"));
  }
}

export default ProblemConfigurationPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
