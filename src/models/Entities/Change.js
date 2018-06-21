//@flow
import EntityBase from './entityBase';
import CustomChangeType from './CustomChangeType';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';
import Company from './Company';
import Category from './Category';
import Group from './Group';
import ChangeStatus from './ChangeStatus';
import Incident from './Incident';
import Problem from './Problem';
import Purchase from './Purchase';
import Impact from './Impact';
import Urgency from './Urgency';
import ChangeTemplate from './ChangeTemplate';
import ApprovalCycle from './ApprovalCycle';
import ServiceContract from './ServiceContract';
import RuleGroup from './RuleGroup';
import EndUserDesktopDefinition from './EndUserDesktopDefinition';
import {IncidentPriority} from './Enums';
import {IncidentClosureNotificationStatus} from './Enums';
import {IncidentSource} from './Enums';

export class Change extends EntityBase {
  guid: string;
  number: string;
  createdDate: string;
  modifiedDate: string;
  closedDate: string;
  authorizationDate: string;
  scheduleImplementationDate: string;
  actualImplementationDate: string;
  reviewDate: string;
  dueDate: string;
  reason: string;
  description: string;
  results: string;
  routeCount: string;
  lastEscalationDate: string;
  missedEmergencyEscalationsCount: string;
  currentApprovalWorkflowGuid: string;
  generatedDate: string;
  isCourtesyTicket: string;
  customNumber: string;
  fromServiceCatalog: string;
  associatedCost: string;
  modifiedByCustomer: string;
  modifiedByAssignedCustomer: string;
  userBrowser: string;
  userDevice: string;
  mySupportSubmissionIpAddress: string;
  feedbackQuestion: string;
  feedbackResponse: string;
  priority: IncidentPriority;
  scheduleImplementationExceededStatus: IncidentClosureNotificationStatus;
  reviewExceededStatus: IncidentClosureNotificationStatus;
  dueExceededStatus: IncidentClosureNotificationStatus;
  source: IncidentSource;
  changeType: CustomChangeType;
  assignee: SupportRepresentative;
  previousAssignee: SupportRepresentative;
  author: SupportRepresentative;
  modifiedBy: SupportRepresentative;
  closedBy: SupportRepresentative;
  customer: Customer;
  company: Company;
  category: Category;
  group: Group;
  status: ChangeStatus;
  sourceIncident: Incident;
  sourceProblem: Problem;
  sourcePurchase: Purchase;
  impact: Impact;
  urgency: Urgency;
  template: ChangeTemplate;
  currentApprovalCycle: ApprovalCycle;
  serviceContract: ServiceContract;
  staticEffectiveRuleGroup: RuleGroup;
  socialClient: EndUserDesktopDefinition;

  static fromApiEntity(apiChange:ChangeType): Change {
    let change = new Change();
    change.id = apiChange.id;
    change.guid = apiChange.guid;
    change.number = apiChange.number;
    change.createdDate = apiChange.createdDate;
    change.modifiedDate = apiChange.modifiedDate;
    change.closedDate = apiChange.closedDate;
    change.authorizationDate = apiChange.authorizationDate;
    change.scheduleImplementationDate = apiChange.scheduleImplementationDate;
    change.actualImplementationDate = apiChange.actualImplementationDate;
    change.reviewDate = apiChange.reviewDate;
    change.dueDate = apiChange.dueDate;
    change.reason = apiChange.reason;
    change.description = apiChange.description;
    change.results = apiChange.results;
    change.routeCount = apiChange.routeCount;
    change.lastEscalationDate = apiChange.lastEscalationDate;
    change.missedEmergencyEscalationsCount = apiChange.missedEmergencyEscalationsCount;
    change.currentApprovalWorkflowGuid = apiChange.currentApprovalWorkflowGuid;
    change.generatedDate = apiChange.generatedDate;
    change.isCourtesyTicket = apiChange.isCourtesyTicket;
    change.customNumber = apiChange.customNumber;
    change.fromServiceCatalog = apiChange.fromServiceCatalog;
    change.associatedCost = apiChange.associatedCost;
    change.modifiedByCustomer = apiChange.modifiedByCustomer;
    change.modifiedByAssignedCustomer = apiChange.modifiedByAssignedCustomer;
    change.userBrowser = apiChange.userBrowser;
    change.userDevice = apiChange.userDevice;
    change.mySupportSubmissionIpAddress = apiChange.mySupportSubmissionIpAddress;
    change.feedbackQuestion = apiChange.feedbackQuestion;
    change.feedbackResponse = apiChange.feedbackResponse;
    change.priority = IncidentPriority.enumOrdinalOf(parseInt(apiChange.priority, 10));
    change.scheduleImplementationExceededStatus = IncidentClosureNotificationStatus.enumOrdinalOf(parseInt(apiChange.scheduleImplementationExceededStatus, 10));
    change.reviewExceededStatus = IncidentClosureNotificationStatus.enumOrdinalOf(parseInt(apiChange.reviewExceededStatus, 10));
    change.dueExceededStatus = IncidentClosureNotificationStatus.enumOrdinalOf(parseInt(apiChange.dueExceededStatus, 10));
    change.source = IncidentSource.enumOrdinalOf(parseInt(apiChange.source, 10));
    if (apiChange.changeType) change.changeType = CustomChangeType.fromApiEntity(apiChange.changeType);
    if (apiChange.assignee) change.assignee = SupportRepresentative.fromApiEntity(apiChange.assignee);
    if (apiChange.previousAssignee) change.previousAssignee = SupportRepresentative.fromApiEntity(apiChange.previousAssignee);
    if (apiChange.author) change.author = SupportRepresentative.fromApiEntity(apiChange.author);
    if (apiChange.modifiedBy) change.modifiedBy = SupportRepresentative.fromApiEntity(apiChange.modifiedBy);
    if (apiChange.closedBy) change.closedBy = SupportRepresentative.fromApiEntity(apiChange.closedBy);
    if (apiChange.customer) change.customer = Customer.fromApiEntity(apiChange.customer);
    if (apiChange.company) change.company = Company.fromApiEntity(apiChange.company);
    if (apiChange.category) change.category = Category.fromApiEntity(apiChange.category);
    if (apiChange.group) change.group = Group.fromApiEntity(apiChange.group);
    if (apiChange.status) change.status = ChangeStatus.fromApiEntity(apiChange.status);
    if (apiChange.sourceIncident) change.sourceIncident = Incident.fromApiEntity(apiChange.sourceIncident);
    if (apiChange.sourceProblem) change.sourceProblem = Problem.fromApiEntity(apiChange.sourceProblem);
    if (apiChange.sourcePurchase) change.sourcePurchase = Purchase.fromApiEntity(apiChange.sourcePurchase);
    if (apiChange.impact) change.impact = Impact.fromApiEntity(apiChange.impact);
    if (apiChange.urgency) change.urgency = Urgency.fromApiEntity(apiChange.urgency);
    if (apiChange.template) change.template = ChangeTemplate.fromApiEntity(apiChange.template);
    if (apiChange.currentApprovalCycle) change.currentApprovalCycle = ApprovalCycle.fromApiEntity(apiChange.currentApprovalCycle);
    if (apiChange.serviceContract) change.serviceContract = ServiceContract.fromApiEntity(apiChange.serviceContract);
    if (apiChange.staticEffectiveRuleGroup) change.staticEffectiveRuleGroup = RuleGroup.fromApiEntity(apiChange.staticEffectiveRuleGroup);
    if (apiChange.socialClient) change.socialClient = EndUserDesktopDefinition.fromApiEntity(apiChange.socialClient);

    return change;
  }
}

export default Change;

export type ChangeType = {
  id: number,
  guid: string;
  number: string;
  createdDate: string;
  modifiedDate: string;
  closedDate: string;
  authorizationDate: string;
  scheduleImplementationDate: string;
  actualImplementationDate: string;
  reviewDate: string;
  dueDate: string;
  reason: string;
  description: string;
  results: string;
  routeCount: string;
  lastEscalationDate: string;
  missedEmergencyEscalationsCount: string;
  currentApprovalWorkflowGuid: string;
  generatedDate: string;
  isCourtesyTicket: string;
  customNumber: string;
  fromServiceCatalog: string;
  associatedCost: string;
  modifiedByCustomer: string;
  modifiedByAssignedCustomer: string;
  userBrowser: string;
  userDevice: string;
  mySupportSubmissionIpAddress: string;
  feedbackQuestion: string;
  feedbackResponse: string;
  priority: IncidentPriority;
  scheduleImplementationExceededStatus: IncidentClosureNotificationStatus;
  reviewExceededStatus: IncidentClosureNotificationStatus;
  dueExceededStatus: IncidentClosureNotificationStatus;
  source: IncidentSource;
  changeType: CustomChangeType;
  assignee: SupportRepresentative;
  previousAssignee: SupportRepresentative;
  author: SupportRepresentative;
  modifiedBy: SupportRepresentative;
  closedBy: SupportRepresentative;
  customer: Customer;
  company: Company;
  category: Category;
  group: Group;
  status: ChangeStatus;
  sourceIncident: Incident;
  sourceProblem: Problem;
  sourcePurchase: Purchase;
  impact: Impact;
  urgency: Urgency;
  template: ChangeTemplate;
  currentApprovalCycle: ApprovalCycle;
  serviceContract: ServiceContract;
  staticEffectiveRuleGroup: RuleGroup;
  socialClient: EndUserDesktopDefinition;
}

