//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import IncidentStatusPropertyNames from './IncidentStatusPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';
import CategoryPropertyNames from './CategoryPropertyNames';
import UrgencyImpactMappingPropertyNames from './UrgencyImpactMappingPropertyNames';
import IncidentLayoutPropertyNames from './IncidentLayoutPropertyNames';
import WorkHistoryTypePropertyNames from './WorkHistoryTypePropertyNames';

class IncidentTemplatePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get issueDescription (): string {
    return super.resolvePropertyName("IssueDescription");
  }
  get issueResolution (): string {
    return super.resolvePropertyName("IssueResolution");
  }
  get daysToFollowup (): string {
    return super.resolvePropertyName("DaysToFollowup");
  }
  get followupEnabled (): string {
    return super.resolvePropertyName("FollowupEnabled");
  }
  get mySupportLockCategory (): string {
    return super.resolvePropertyName("MySupportLockCategory");
  }
  get availableToReps (): string {
    return super.resolvePropertyName("AvailableToReps");
  }
  get autoClose (): string {
    return super.resolvePropertyName("AutoClose");
  }
  get autoRecordTime (): string {
    return super.resolvePropertyName("AutoRecordTime");
  }
  get timeWorkedHours (): string {
    return super.resolvePropertyName("TimeWorkedHours");
  }
  get timeWorkedMinutes (): string {
    return super.resolvePropertyName("TimeWorkedMinutes");
  }
  get shortDescription (): string {
    return super.resolvePropertyName("ShortDescription");
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
  get priority (): string {
    return super.resolvePropertyName("Priority");
  }
  get openStatus (): IncidentStatusPropertyNames {
    return new IncidentStatusPropertyNames(super.resolvePropertyName("OpenStatus"));
  }
  get closedStatus (): IncidentStatusPropertyNames {
    return new IncidentStatusPropertyNames(super.resolvePropertyName("ClosedStatus"));
  }
  get assignee (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Assignee"));
  }
  get assigneeGroup (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("AssigneeGroup"));
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get category (): CategoryPropertyNames {
    return new CategoryPropertyNames(super.resolvePropertyName("Category"));
  }
  get defaultMapping (): UrgencyImpactMappingPropertyNames {
    return new UrgencyImpactMappingPropertyNames(super.resolvePropertyName("DefaultMapping"));
  }
  get mySupportDisplayIncidentLayout (): IncidentLayoutPropertyNames {
    return new IncidentLayoutPropertyNames(super.resolvePropertyName("MySupportDisplayIncidentLayout"));
  }
  get mySupportSubmitIncidentLayout (): IncidentLayoutPropertyNames {
    return new IncidentLayoutPropertyNames(super.resolvePropertyName("MySupportSubmitIncidentLayout"));
  }
  get workHistoryType (): WorkHistoryTypePropertyNames {
    return new WorkHistoryTypePropertyNames(super.resolvePropertyName("WorkHistoryType"));
  }
}

export default IncidentTemplatePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
