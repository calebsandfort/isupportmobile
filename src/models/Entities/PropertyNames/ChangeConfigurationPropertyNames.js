//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import UrgencyImpactMappingPropertyNames from './UrgencyImpactMappingPropertyNames';
import ChangeStatusPropertyNames from './ChangeStatusPropertyNames';
import CustomChangeTypePropertyNames from './CustomChangeTypePropertyNames';
import WorkHistoryTypePropertyNames from './WorkHistoryTypePropertyNames';

class ChangeConfigurationPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get includeCustomerWorkHistory (): string {
    return super.resolvePropertyName("IncludeCustomerWorkHistory");
  }
  get defaultScheduledImplementationInterval (): string {
    return super.resolvePropertyName("DefaultScheduledImplementationInterval");
  }
  get defaultReviewInterval (): string {
    return super.resolvePropertyName("DefaultReviewInterval");
  }
  get defaultDueInterval (): string {
    return super.resolvePropertyName("DefaultDueInterval");
  }
  get setAssigneeAsAuthor (): string {
    return super.resolvePropertyName("SetAssigneeAsAuthor");
  }
  get workHistoryTimeRequired (): string {
    return super.resolvePropertyName("WorkHistoryTimeRequired");
  }
  get workHistoryStartStopFieldsEnabled (): string {
    return super.resolvePropertyName("WorkHistoryStartStopFieldsEnabled");
  }
  get includeWorkHistoryNotes (): string {
    return super.resolvePropertyName("IncludeWorkHistoryNotes");
  }
  get defaultAssignee (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("DefaultAssignee"));
  }
  get defaultMapping (): UrgencyImpactMappingPropertyNames {
    return new UrgencyImpactMappingPropertyNames(super.resolvePropertyName("DefaultMapping"));
  }
  get defaultStatus (): ChangeStatusPropertyNames {
    return new ChangeStatusPropertyNames(super.resolvePropertyName("DefaultStatus"));
  }
  get defaultChangeType (): CustomChangeTypePropertyNames {
    return new CustomChangeTypePropertyNames(super.resolvePropertyName("DefaultChangeType"));
  }
  get defaultWorkHistoryType (): WorkHistoryTypePropertyNames {
    return new WorkHistoryTypePropertyNames(super.resolvePropertyName("DefaultWorkHistoryType"));
  }
}

export default ChangeConfigurationPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
