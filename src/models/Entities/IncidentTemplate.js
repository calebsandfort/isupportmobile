//@flow
import EntityBase from './entityBase';
import IncidentStatus from './IncidentStatus';
import SupportRepresentative from './SupportRepresentative';
import Group from './Group';
import Customer from './Customer';
import Category from './Category';
import UrgencyImpactMapping from './UrgencyImpactMapping';
import IncidentLayout from './IncidentLayout';
import WorkHistoryType from './WorkHistoryType';
import {IncidentPriority} from './Enums';

export class IncidentTemplate extends EntityBase {
  name: string;
  issueDescription: string;
  issueResolution: string;
  daysToFollowup: string;
  followupEnabled: string;
  mySupportLockCategory: string;
  availableToReps: string;
  autoClose: string;
  autoRecordTime: string;
  timeWorkedHours: string;
  timeWorkedMinutes: string;
  shortDescription: string;
  header: string;
  footer: string;
  appendText: string;
  appendDescriptionFromParent: string;
  priority: IncidentPriority;
  openStatus: IncidentStatus;
  closedStatus: IncidentStatus;
  assignee: SupportRepresentative;
  assigneeGroup: Group;
  customer: Customer;
  category: Category;
  defaultMapping: UrgencyImpactMapping;
  mySupportDisplayIncidentLayout: IncidentLayout;
  mySupportSubmitIncidentLayout: IncidentLayout;
  workHistoryType: WorkHistoryType;

  static fromApiEntity(apiIncidentTemplate:IncidentTemplateType): IncidentTemplate {
    let incidentTemplate = new IncidentTemplate();
    incidentTemplate.id = apiIncidentTemplate.id;
    incidentTemplate.name = apiIncidentTemplate.name;
    incidentTemplate.issueDescription = apiIncidentTemplate.issueDescription;
    incidentTemplate.issueResolution = apiIncidentTemplate.issueResolution;
    incidentTemplate.daysToFollowup = apiIncidentTemplate.daysToFollowup;
    incidentTemplate.followupEnabled = apiIncidentTemplate.followupEnabled;
    incidentTemplate.mySupportLockCategory = apiIncidentTemplate.mySupportLockCategory;
    incidentTemplate.availableToReps = apiIncidentTemplate.availableToReps;
    incidentTemplate.autoClose = apiIncidentTemplate.autoClose;
    incidentTemplate.autoRecordTime = apiIncidentTemplate.autoRecordTime;
    incidentTemplate.timeWorkedHours = apiIncidentTemplate.timeWorkedHours;
    incidentTemplate.timeWorkedMinutes = apiIncidentTemplate.timeWorkedMinutes;
    incidentTemplate.shortDescription = apiIncidentTemplate.shortDescription;
    incidentTemplate.header = apiIncidentTemplate.header;
    incidentTemplate.footer = apiIncidentTemplate.footer;
    incidentTemplate.appendText = apiIncidentTemplate.appendText;
    incidentTemplate.appendDescriptionFromParent = apiIncidentTemplate.appendDescriptionFromParent;
    incidentTemplate.priority = IncidentPriority.enumOrdinalOf(parseInt(apiIncidentTemplate.priority, 10));
    if (apiIncidentTemplate.openStatus) incidentTemplate.openStatus = IncidentStatus.fromApiEntity(apiIncidentTemplate.openStatus);
    if (apiIncidentTemplate.closedStatus) incidentTemplate.closedStatus = IncidentStatus.fromApiEntity(apiIncidentTemplate.closedStatus);
    if (apiIncidentTemplate.assignee) incidentTemplate.assignee = SupportRepresentative.fromApiEntity(apiIncidentTemplate.assignee);
    if (apiIncidentTemplate.assigneeGroup) incidentTemplate.assigneeGroup = Group.fromApiEntity(apiIncidentTemplate.assigneeGroup);
    if (apiIncidentTemplate.customer) incidentTemplate.customer = Customer.fromApiEntity(apiIncidentTemplate.customer);
    if (apiIncidentTemplate.category) incidentTemplate.category = Category.fromApiEntity(apiIncidentTemplate.category);
    if (apiIncidentTemplate.defaultMapping) incidentTemplate.defaultMapping = UrgencyImpactMapping.fromApiEntity(apiIncidentTemplate.defaultMapping);
    if (apiIncidentTemplate.mySupportDisplayIncidentLayout) incidentTemplate.mySupportDisplayIncidentLayout = IncidentLayout.fromApiEntity(apiIncidentTemplate.mySupportDisplayIncidentLayout);
    if (apiIncidentTemplate.mySupportSubmitIncidentLayout) incidentTemplate.mySupportSubmitIncidentLayout = IncidentLayout.fromApiEntity(apiIncidentTemplate.mySupportSubmitIncidentLayout);
    if (apiIncidentTemplate.workHistoryType) incidentTemplate.workHistoryType = WorkHistoryType.fromApiEntity(apiIncidentTemplate.workHistoryType);

    return incidentTemplate;
  }
}

export default IncidentTemplate;

export type IncidentTemplateType = {
  id: number,
  name: string;
  issueDescription: string;
  issueResolution: string;
  daysToFollowup: string;
  followupEnabled: string;
  mySupportLockCategory: string;
  availableToReps: string;
  autoClose: string;
  autoRecordTime: string;
  timeWorkedHours: string;
  timeWorkedMinutes: string;
  shortDescription: string;
  header: string;
  footer: string;
  appendText: string;
  appendDescriptionFromParent: string;
  priority: IncidentPriority;
  openStatus: IncidentStatus;
  closedStatus: IncidentStatus;
  assignee: SupportRepresentative;
  assigneeGroup: Group;
  customer: Customer;
  category: Category;
  defaultMapping: UrgencyImpactMapping;
  mySupportDisplayIncidentLayout: IncidentLayout;
  mySupportSubmitIncidentLayout: IncidentLayout;
  workHistoryType: WorkHistoryType;
}

