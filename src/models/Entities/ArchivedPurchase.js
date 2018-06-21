//@flow
import EntityBase from './entityBase';

export class ArchivedPurchase extends EntityBase {
  customNumber: string;
  number: string;
  status: string;
  dateCreated: string;
  dateModified: string;
  dateClosed: string;
  author: string;
  modifiedBy: string;
  closedBy: string;
  shortDescription: string;
  comments: string;
  requestNumber: string;
  costCenter: string;
  jobFunction: string;
  associatedCost: string;
  lineItemTotal: string;
  requestedBy: string;
  requestedByCompany: string;
  requestedByEmail: string;
  requestedByPhone: string;
  recipient: string;
  recipientCompany: string;
  recipientEmail: string;
  recipientPhone: string;
  billTo: string;
  billToCompany: string;
  billToEmail: string;
  billToPhone: string;
  timeWorked: string;
  auditHistory: string;
  workHistory: string;
  customerWorkHistory: string;
  approvalHistory: string;
  correspondenceHistory: string;
  repChatHistory: string;
  ruleGroup: string;
  ruleGroupHistory: string;

  static fromApiEntity(apiArchivedPurchase:ArchivedPurchaseType): ArchivedPurchase {
    let archivedPurchase = new ArchivedPurchase();
    archivedPurchase.id = apiArchivedPurchase.id;
    archivedPurchase.customNumber = apiArchivedPurchase.customNumber;
    archivedPurchase.number = apiArchivedPurchase.number;
    archivedPurchase.status = apiArchivedPurchase.status;
    archivedPurchase.dateCreated = apiArchivedPurchase.dateCreated;
    archivedPurchase.dateModified = apiArchivedPurchase.dateModified;
    archivedPurchase.dateClosed = apiArchivedPurchase.dateClosed;
    archivedPurchase.author = apiArchivedPurchase.author;
    archivedPurchase.modifiedBy = apiArchivedPurchase.modifiedBy;
    archivedPurchase.closedBy = apiArchivedPurchase.closedBy;
    archivedPurchase.shortDescription = apiArchivedPurchase.shortDescription;
    archivedPurchase.comments = apiArchivedPurchase.comments;
    archivedPurchase.requestNumber = apiArchivedPurchase.requestNumber;
    archivedPurchase.costCenter = apiArchivedPurchase.costCenter;
    archivedPurchase.jobFunction = apiArchivedPurchase.jobFunction;
    archivedPurchase.associatedCost = apiArchivedPurchase.associatedCost;
    archivedPurchase.lineItemTotal = apiArchivedPurchase.lineItemTotal;
    archivedPurchase.requestedBy = apiArchivedPurchase.requestedBy;
    archivedPurchase.requestedByCompany = apiArchivedPurchase.requestedByCompany;
    archivedPurchase.requestedByEmail = apiArchivedPurchase.requestedByEmail;
    archivedPurchase.requestedByPhone = apiArchivedPurchase.requestedByPhone;
    archivedPurchase.recipient = apiArchivedPurchase.recipient;
    archivedPurchase.recipientCompany = apiArchivedPurchase.recipientCompany;
    archivedPurchase.recipientEmail = apiArchivedPurchase.recipientEmail;
    archivedPurchase.recipientPhone = apiArchivedPurchase.recipientPhone;
    archivedPurchase.billTo = apiArchivedPurchase.billTo;
    archivedPurchase.billToCompany = apiArchivedPurchase.billToCompany;
    archivedPurchase.billToEmail = apiArchivedPurchase.billToEmail;
    archivedPurchase.billToPhone = apiArchivedPurchase.billToPhone;
    archivedPurchase.timeWorked = apiArchivedPurchase.timeWorked;
    archivedPurchase.auditHistory = apiArchivedPurchase.auditHistory;
    archivedPurchase.workHistory = apiArchivedPurchase.workHistory;
    archivedPurchase.customerWorkHistory = apiArchivedPurchase.customerWorkHistory;
    archivedPurchase.approvalHistory = apiArchivedPurchase.approvalHistory;
    archivedPurchase.correspondenceHistory = apiArchivedPurchase.correspondenceHistory;
    archivedPurchase.repChatHistory = apiArchivedPurchase.repChatHistory;
    archivedPurchase.ruleGroup = apiArchivedPurchase.ruleGroup;
    archivedPurchase.ruleGroupHistory = apiArchivedPurchase.ruleGroupHistory;

    return archivedPurchase;
  }
}

export default ArchivedPurchase;

export type ArchivedPurchaseType = {
  id: number,
  customNumber: string;
  number: string;
  status: string;
  dateCreated: string;
  dateModified: string;
  dateClosed: string;
  author: string;
  modifiedBy: string;
  closedBy: string;
  shortDescription: string;
  comments: string;
  requestNumber: string;
  costCenter: string;
  jobFunction: string;
  associatedCost: string;
  lineItemTotal: string;
  requestedBy: string;
  requestedByCompany: string;
  requestedByEmail: string;
  requestedByPhone: string;
  recipient: string;
  recipientCompany: string;
  recipientEmail: string;
  recipientPhone: string;
  billTo: string;
  billToCompany: string;
  billToEmail: string;
  billToPhone: string;
  timeWorked: string;
  auditHistory: string;
  workHistory: string;
  customerWorkHistory: string;
  approvalHistory: string;
  correspondenceHistory: string;
  repChatHistory: string;
  ruleGroup: string;
  ruleGroupHistory: string;
}

