//@flow
import EntityBase from './entityBase';

export class ArchivedProblem extends EntityBase {
  customNumber: string;
  number: string;
  priority: string;
  impact: string;
  urgency: string;
  status: string;
  assignee: string;
  group: string;
  ruleGroup: string;
  source: string;
  dateCreated: string;
  dateModified: string;
  datePublished: string;
  dateLastTweeted: string;
  dateClosed: string;
  author: string;
  modifiedBy: string;
  closedBy: string;
  publishedStatus: string;
  shortDescription: string;
  description: string;
  rootCause: string;
  workAround: string;
  resolution: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  category5: string;
  timeWorked: string;
  othersToNotify: string;
  associatedConfigurationItems: string;
  auditHistory: string;
  workHistory: string;
  ruleGroupHistory: string;
  correspondenceHistory: string;
  repChatHistory: string;

  static fromApiEntity(apiArchivedProblem:ArchivedProblemType): ArchivedProblem {
    let archivedProblem = new ArchivedProblem();
    archivedProblem.id = apiArchivedProblem.id;
    archivedProblem.customNumber = apiArchivedProblem.customNumber;
    archivedProblem.number = apiArchivedProblem.number;
    archivedProblem.priority = apiArchivedProblem.priority;
    archivedProblem.impact = apiArchivedProblem.impact;
    archivedProblem.urgency = apiArchivedProblem.urgency;
    archivedProblem.status = apiArchivedProblem.status;
    archivedProblem.assignee = apiArchivedProblem.assignee;
    archivedProblem.group = apiArchivedProblem.group;
    archivedProblem.ruleGroup = apiArchivedProblem.ruleGroup;
    archivedProblem.source = apiArchivedProblem.source;
    archivedProblem.dateCreated = apiArchivedProblem.dateCreated;
    archivedProblem.dateModified = apiArchivedProblem.dateModified;
    archivedProblem.datePublished = apiArchivedProblem.datePublished;
    archivedProblem.dateLastTweeted = apiArchivedProblem.dateLastTweeted;
    archivedProblem.dateClosed = apiArchivedProblem.dateClosed;
    archivedProblem.author = apiArchivedProblem.author;
    archivedProblem.modifiedBy = apiArchivedProblem.modifiedBy;
    archivedProblem.closedBy = apiArchivedProblem.closedBy;
    archivedProblem.publishedStatus = apiArchivedProblem.publishedStatus;
    archivedProblem.shortDescription = apiArchivedProblem.shortDescription;
    archivedProblem.description = apiArchivedProblem.description;
    archivedProblem.rootCause = apiArchivedProblem.rootCause;
    archivedProblem.workAround = apiArchivedProblem.workAround;
    archivedProblem.resolution = apiArchivedProblem.resolution;
    archivedProblem.category1 = apiArchivedProblem.category1;
    archivedProblem.category2 = apiArchivedProblem.category2;
    archivedProblem.category3 = apiArchivedProblem.category3;
    archivedProblem.category4 = apiArchivedProblem.category4;
    archivedProblem.category5 = apiArchivedProblem.category5;
    archivedProblem.timeWorked = apiArchivedProblem.timeWorked;
    archivedProblem.othersToNotify = apiArchivedProblem.othersToNotify;
    archivedProblem.associatedConfigurationItems = apiArchivedProblem.associatedConfigurationItems;
    archivedProblem.auditHistory = apiArchivedProblem.auditHistory;
    archivedProblem.workHistory = apiArchivedProblem.workHistory;
    archivedProblem.ruleGroupHistory = apiArchivedProblem.ruleGroupHistory;
    archivedProblem.correspondenceHistory = apiArchivedProblem.correspondenceHistory;
    archivedProblem.repChatHistory = apiArchivedProblem.repChatHistory;

    return archivedProblem;
  }
}

export default ArchivedProblem;

export type ArchivedProblemType = {
  id: number,
  customNumber: string;
  number: string;
  priority: string;
  impact: string;
  urgency: string;
  status: string;
  assignee: string;
  group: string;
  ruleGroup: string;
  source: string;
  dateCreated: string;
  dateModified: string;
  datePublished: string;
  dateLastTweeted: string;
  dateClosed: string;
  author: string;
  modifiedBy: string;
  closedBy: string;
  publishedStatus: string;
  shortDescription: string;
  description: string;
  rootCause: string;
  workAround: string;
  resolution: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  category5: string;
  timeWorked: string;
  othersToNotify: string;
  associatedConfigurationItems: string;
  auditHistory: string;
  workHistory: string;
  ruleGroupHistory: string;
  correspondenceHistory: string;
  repChatHistory: string;
}

