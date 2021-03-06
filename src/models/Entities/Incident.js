//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';
import Company from './Company';
import Category from './Category';
import Group from './Group';
import IncidentTemplate from './IncidentTemplate';
import IncidentStatus from './IncidentStatus';
import ServiceLevelAgreementMatrix from './ServiceLevelAgreementMatrix';
import Acknowledgment from './Acknowledgment';
import ApprovalCycle from './ApprovalCycle';
import Impact from './Impact';
import Urgency from './Urgency';
import ServiceContract from './ServiceContract';
import RuleGroup from './RuleGroup';
import EndUserDesktopDefinition from './EndUserDesktopDefinition';
import {IncidentPriority} from './Enums';
import {IncidentSource} from './Enums';

export class Incident extends EntityBase {
  guid: string;
  routeCount: string;
  closedDate: string;
  createdDate: string;
  followupDate: string;
  lastEscalationDate: string;
  modifiedDate: string;
  number: string;
  issueDescription: string;
  issueResolution: string;
  generatedDate: string;
  currentApprovalWorkflowGuid: string;
  shortDescription: string;
  customNumber: string;
  isCourtesyTicket: string;
  modifiedByCustomer: string;
  modifiedByAssignedCustomer: string;
  feedbackQuestion: string;
  feedbackResponse: string;
  userBrowser: string;
  userDevice: string;
  mySupportSubmissionIpAddress: string;
  priority: IncidentPriority;
  source: IncidentSource;
  assignee: SupportRepresentative;
  previousAssignee: SupportRepresentative;
  author: SupportRepresentative;
  modifiedBy: SupportRepresentative;
  closedBy: SupportRepresentative;
  customer: Customer;
  customerAuthor: Customer;
  company: Company;
  category: Category;
  group: Group;
  template: IncidentTemplate;
  status: IncidentStatus;
  currentSlaMatrix: ServiceLevelAgreementMatrix;
  currentAcknowledgment: Acknowledgment;
  currentApprovalCycle: ApprovalCycle;
  impact: Impact;
  urgency: Urgency;
  serviceContract: ServiceContract;
  staticEffectiveRuleGroup: RuleGroup;
  socialClient: EndUserDesktopDefinition;

  static fromApiEntity(apiIncident:IncidentType): Incident {
    let incident = new Incident();
    incident.id = apiIncident.id;
    incident.guid = apiIncident.guid;
    incident.routeCount = apiIncident.routeCount;
    incident.closedDate = apiIncident.closedDate;
    incident.createdDate = apiIncident.createdDate;
    incident.followupDate = apiIncident.followupDate;
    incident.lastEscalationDate = apiIncident.lastEscalationDate;
    incident.modifiedDate = apiIncident.modifiedDate;
    incident.number = apiIncident.number;
    incident.issueDescription = apiIncident.issueDescription;
    incident.issueResolution = apiIncident.issueResolution;
    incident.generatedDate = apiIncident.generatedDate;
    incident.currentApprovalWorkflowGuid = apiIncident.currentApprovalWorkflowGuid;
    incident.shortDescription = apiIncident.shortDescription;
    incident.customNumber = apiIncident.customNumber;
    incident.isCourtesyTicket = apiIncident.isCourtesyTicket;
    incident.modifiedByCustomer = apiIncident.modifiedByCustomer;
    incident.modifiedByAssignedCustomer = apiIncident.modifiedByAssignedCustomer;
    incident.feedbackQuestion = apiIncident.feedbackQuestion;
    incident.feedbackResponse = apiIncident.feedbackResponse;
    incident.userBrowser = apiIncident.userBrowser;
    incident.userDevice = apiIncident.userDevice;
    incident.mySupportSubmissionIpAddress = apiIncident.mySupportSubmissionIpAddress;
    incident.priority = IncidentPriority.enumOrdinalOf(parseInt(apiIncident.priority, 10));
    incident.source = IncidentSource.enumOrdinalOf(parseInt(apiIncident.source, 10));
    if (apiIncident.assignee) incident.assignee = SupportRepresentative.fromApiEntity(apiIncident.assignee);
    if (apiIncident.previousAssignee) incident.previousAssignee = SupportRepresentative.fromApiEntity(apiIncident.previousAssignee);
    if (apiIncident.author) incident.author = SupportRepresentative.fromApiEntity(apiIncident.author);
    if (apiIncident.modifiedBy) incident.modifiedBy = SupportRepresentative.fromApiEntity(apiIncident.modifiedBy);
    if (apiIncident.closedBy) incident.closedBy = SupportRepresentative.fromApiEntity(apiIncident.closedBy);
    if (apiIncident.customer) incident.customer = Customer.fromApiEntity(apiIncident.customer);
    if (apiIncident.customerAuthor) incident.customerAuthor = Customer.fromApiEntity(apiIncident.customerAuthor);
    if (apiIncident.company) incident.company = Company.fromApiEntity(apiIncident.company);
    if (apiIncident.category) incident.category = Category.fromApiEntity(apiIncident.category);
    if (apiIncident.group) incident.group = Group.fromApiEntity(apiIncident.group);
    if (apiIncident.template) incident.template = IncidentTemplate.fromApiEntity(apiIncident.template);
    if (apiIncident.status) incident.status = IncidentStatus.fromApiEntity(apiIncident.status);
    if (apiIncident.currentSlaMatrix) incident.currentSlaMatrix = ServiceLevelAgreementMatrix.fromApiEntity(apiIncident.currentSlaMatrix);
    if (apiIncident.currentAcknowledgment) incident.currentAcknowledgment = Acknowledgment.fromApiEntity(apiIncident.currentAcknowledgment);
    if (apiIncident.currentApprovalCycle) incident.currentApprovalCycle = ApprovalCycle.fromApiEntity(apiIncident.currentApprovalCycle);
    if (apiIncident.impact) incident.impact = Impact.fromApiEntity(apiIncident.impact);
    if (apiIncident.urgency) incident.urgency = Urgency.fromApiEntity(apiIncident.urgency);
    if (apiIncident.serviceContract) incident.serviceContract = ServiceContract.fromApiEntity(apiIncident.serviceContract);
    if (apiIncident.staticEffectiveRuleGroup) incident.staticEffectiveRuleGroup = RuleGroup.fromApiEntity(apiIncident.staticEffectiveRuleGroup);
    if (apiIncident.socialClient) incident.socialClient = EndUserDesktopDefinition.fromApiEntity(apiIncident.socialClient);

    return incident;
  }
}

export default Incident;

export type IncidentType = {
  id: number,
  guid: string;
  routeCount: string;
  closedDate: string;
  createdDate: string;
  followupDate: string;
  lastEscalationDate: string;
  modifiedDate: string;
  number: string;
  issueDescription: string;
  issueResolution: string;
  generatedDate: string;
  currentApprovalWorkflowGuid: string;
  shortDescription: string;
  customNumber: string;
  isCourtesyTicket: string;
  modifiedByCustomer: string;
  modifiedByAssignedCustomer: string;
  feedbackQuestion: string;
  feedbackResponse: string;
  userBrowser: string;
  userDevice: string;
  mySupportSubmissionIpAddress: string;
  priority: IncidentPriority;
  source: IncidentSource;
  assignee: SupportRepresentative;
  previousAssignee: SupportRepresentative;
  author: SupportRepresentative;
  modifiedBy: SupportRepresentative;
  closedBy: SupportRepresentative;
  customer: Customer;
  customerAuthor: Customer;
  company: Company;
  category: Category;
  group: Group;
  template: IncidentTemplate;
  status: IncidentStatus;
  currentSlaMatrix: ServiceLevelAgreementMatrix;
  currentAcknowledgment: Acknowledgment;
  currentApprovalCycle: ApprovalCycle;
  impact: Impact;
  urgency: Urgency;
  serviceContract: ServiceContract;
  staticEffectiveRuleGroup: RuleGroup;
  socialClient: EndUserDesktopDefinition;
}
