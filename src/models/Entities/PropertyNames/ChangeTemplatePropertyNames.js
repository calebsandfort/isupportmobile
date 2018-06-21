//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import UrgencyImpactMappingPropertyNames from './UrgencyImpactMappingPropertyNames';
import ChangeStatusPropertyNames from './ChangeStatusPropertyNames';
import CustomChangeTypePropertyNames from './CustomChangeTypePropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import CategoryPropertyNames from './CategoryPropertyNames';
import ChangeLayoutPropertyNames from './ChangeLayoutPropertyNames';

class ChangeTemplatePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get reason (): string {
    return super.resolvePropertyName("Reason");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get results (): string {
    return super.resolvePropertyName("Results");
  }
  get mySupportLockCategory (): string {
    return super.resolvePropertyName("MySupportLockCategory");
  }
  get availableToReps (): string {
    return super.resolvePropertyName("AvailableToReps");
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
  get isWorkflowTemplate (): string {
    return super.resolvePropertyName("IsWorkflowTemplate");
  }
  get header (): string {
    return super.resolvePropertyName("Header");
  }
  get footer (): string {
    return super.resolvePropertyName("Footer");
  }
  get appendText (): string {
    return super.resolvePropertyName("AppendText");
  }
  get appendDescriptionFromParent (): string {
    return super.resolvePropertyName("AppendDescriptionFromParent");
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
  get assignee (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Assignee"));
  }
  get assigneeGroup (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("AssigneeGroup"));
  }
  get category (): CategoryPropertyNames {
    return new CategoryPropertyNames(super.resolvePropertyName("Category"));
  }
  get mySupportDisplayChangeLayout (): ChangeLayoutPropertyNames {
    return new ChangeLayoutPropertyNames(super.resolvePropertyName("MySupportDisplayChangeLayout"));
  }
  get mySupportSubmitChangeLayout (): ChangeLayoutPropertyNames {
    return new ChangeLayoutPropertyNames(super.resolvePropertyName("MySupportSubmitChangeLayout"));
  }
}

export default ChangeTemplatePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
