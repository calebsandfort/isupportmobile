//@flow
import EntityBase from './entityBase';

export class ArchivedIncident extends EntityBase {
  company: string;
  customer: string;
  customerFirstName: string;
  customerLastName: string;
  customerLocation: string;
  customerEmail: string;
  customerDepartment: string;
  customerPhone: string;
  customerAddress: string;
  customerNumber: string;
  incidentCustomNumber: string;
  incidentNumber: string;
  priority: string;
  impact: string;
  urgency: string;
  status: string;
  assignee: string;
  group: string;
  sLA: string;
  ruleGroup: string;
  dateFollowup: string;
  source: string;
  dateOpened: string;
  dateModified: string;
  dateClosed: string;
  author: string;
  modifiedBy: string;
  closedBy: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  category5: string;
  shortDescription: string;
  description: string;
  resolution: string;
  feedbackQuestion: string;
  feedbackResponse: string;
  serviceContract: string;
  routeCount: string;
  escalationCount: string;
  timeWorked: string;
  othersToNotify: string;
  associatedConfigurationItems: string;
  sLAMatrix: string;
  auditHistory: string;
  workHistory: string;
  customerWorkHistory: string;
  slaHistory: string;
  approvalHistory: string;
  ruleGroupHistory: string;
  correspondenceHistory: string;
  customerChatHistory: string;
  repChatHistory: string;

  static fromApiEntity(apiArchivedIncident:ArchivedIncidentType): ArchivedIncident {
    let archivedIncident = new ArchivedIncident();
    archivedIncident.id = apiArchivedIncident.id;
    archivedIncident.company = apiArchivedIncident.company;
    archivedIncident.customer = apiArchivedIncident.customer;
    archivedIncident.customerFirstName = apiArchivedIncident.customerFirstName;
    archivedIncident.customerLastName = apiArchivedIncident.customerLastName;
    archivedIncident.customerLocation = apiArchivedIncident.customerLocation;
    archivedIncident.customerEmail = apiArchivedIncident.customerEmail;
    archivedIncident.customerDepartment = apiArchivedIncident.customerDepartment;
    archivedIncident.customerPhone = apiArchivedIncident.customerPhone;
    archivedIncident.customerAddress = apiArchivedIncident.customerAddress;
    archivedIncident.customerNumber = apiArchivedIncident.customerNumber;
    archivedIncident.incidentCustomNumber = apiArchivedIncident.incidentCustomNumber;
    archivedIncident.incidentNumber = apiArchivedIncident.incidentNumber;
    archivedIncident.priority = apiArchivedIncident.priority;
    archivedIncident.impact = apiArchivedIncident.impact;
    archivedIncident.urgency = apiArchivedIncident.urgency;
    archivedIncident.status = apiArchivedIncident.status;
    archivedIncident.assignee = apiArchivedIncident.assignee;
    archivedIncident.group = apiArchivedIncident.group;
    archivedIncident.sLA = apiArchivedIncident.sLA;
    archivedIncident.ruleGroup = apiArchivedIncident.ruleGroup;
    archivedIncident.dateFollowup = apiArchivedIncident.dateFollowup;
    archivedIncident.source = apiArchivedIncident.source;
    archivedIncident.dateOpened = apiArchivedIncident.dateOpened;
    archivedIncident.dateModified = apiArchivedIncident.dateModified;
    archivedIncident.dateClosed = apiArchivedIncident.dateClosed;
    archivedIncident.author = apiArchivedIncident.author;
    archivedIncident.modifiedBy = apiArchivedIncident.modifiedBy;
    archivedIncident.closedBy = apiArchivedIncident.closedBy;
    archivedIncident.category1 = apiArchivedIncident.category1;
    archivedIncident.category2 = apiArchivedIncident.category2;
    archivedIncident.category3 = apiArchivedIncident.category3;
    archivedIncident.category4 = apiArchivedIncident.category4;
    archivedIncident.category5 = apiArchivedIncident.category5;
    archivedIncident.shortDescription = apiArchivedIncident.shortDescription;
    archivedIncident.description = apiArchivedIncident.description;
    archivedIncident.resolution = apiArchivedIncident.resolution;
    archivedIncident.feedbackQuestion = apiArchivedIncident.feedbackQuestion;
    archivedIncident.feedbackResponse = apiArchivedIncident.feedbackResponse;
    archivedIncident.serviceContract = apiArchivedIncident.serviceContract;
    archivedIncident.routeCount = apiArchivedIncident.routeCount;
    archivedIncident.escalationCount = apiArchivedIncident.escalationCount;
    archivedIncident.timeWorked = apiArchivedIncident.timeWorked;
    archivedIncident.othersToNotify = apiArchivedIncident.othersToNotify;
    archivedIncident.associatedConfigurationItems = apiArchivedIncident.associatedConfigurationItems;
    archivedIncident.sLAMatrix = apiArchivedIncident.sLAMatrix;
    archivedIncident.auditHistory = apiArchivedIncident.auditHistory;
    archivedIncident.workHistory = apiArchivedIncident.workHistory;
    archivedIncident.customerWorkHistory = apiArchivedIncident.customerWorkHistory;
    archivedIncident.slaHistory = apiArchivedIncident.slaHistory;
    archivedIncident.approvalHistory = apiArchivedIncident.approvalHistory;
    archivedIncident.ruleGroupHistory = apiArchivedIncident.ruleGroupHistory;
    archivedIncident.correspondenceHistory = apiArchivedIncident.correspondenceHistory;
    archivedIncident.customerChatHistory = apiArchivedIncident.customerChatHistory;
    archivedIncident.repChatHistory = apiArchivedIncident.repChatHistory;

    return archivedIncident;
  }
}

export default ArchivedIncident;

export type ArchivedIncidentType = {
  id: number,
  company: string;
  customer: string;
  customerFirstName: string;
  customerLastName: string;
  customerLocation: string;
  customerEmail: string;
  customerDepartment: string;
  customerPhone: string;
  customerAddress: string;
  customerNumber: string;
  incidentCustomNumber: string;
  incidentNumber: string;
  priority: string;
  impact: string;
  urgency: string;
  status: string;
  assignee: string;
  group: string;
  sLA: string;
  ruleGroup: string;
  dateFollowup: string;
  source: string;
  dateOpened: string;
  dateModified: string;
  dateClosed: string;
  author: string;
  modifiedBy: string;
  closedBy: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  category5: string;
  shortDescription: string;
  description: string;
  resolution: string;
  feedbackQuestion: string;
  feedbackResponse: string;
  serviceContract: string;
  routeCount: string;
  escalationCount: string;
  timeWorked: string;
  othersToNotify: string;
  associatedConfigurationItems: string;
  sLAMatrix: string;
  auditHistory: string;
  workHistory: string;
  customerWorkHistory: string;
  slaHistory: string;
  approvalHistory: string;
  ruleGroupHistory: string;
  correspondenceHistory: string;
  customerChatHistory: string;
  repChatHistory: string;
}

