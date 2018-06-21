//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import PurchaseStatus from './PurchaseStatus';
import Customer from './Customer';
import CostCenter from './CostCenter';
import JobFunction from './JobFunction';
import Incident from './Incident';
import Problem from './Problem';
import Change from './Change';
import Asset from './Asset';
import PurchaseTemplate from './PurchaseTemplate';
import Company from './Company';
import EndUserDesktopDefinition from './EndUserDesktopDefinition';
import RuleGroup from './RuleGroup';
import {ApprovalRequestAction} from './Enums';

export class Purchase extends EntityBase {
  number: string;
  createdDate: string;
  modifiedDate: string;
  closedDate: string;
  shortDescription: string;
  requestNumber: string;
  comments: string;
  customNumber: string;
  fromServiceCatalog: string;
  associatedCost: string;
  userBrowser: string;
  userDevice: string;
  mySupportSubmissionIpAddress: string;
  modifiedByCustomer: string;
  modifiedByAssignedCustomer: string;
  approvalState: ApprovalRequestAction;
  author: SupportRepresentative;
  modifiedBy: SupportRepresentative;
  status: PurchaseStatus;
  customerRequestedBy: Customer;
  customerRecipient: Customer;
  customerBillTo: Customer;
  repRequestedBy: SupportRepresentative;
  repRecipient: SupportRepresentative;
  repBillTo: SupportRepresentative;
  costCenter: CostCenter;
  jobFunction: JobFunction;
  sourceIncident: Incident;
  sourceProblem: Problem;
  sourceChange: Change;
  sourceAsset: Asset;
  template: PurchaseTemplate;
  customerRequestedByCompany: Company;
  customerRecipientCompany: Company;
  customerBillToCompany: Company;
  socialClient: EndUserDesktopDefinition;
  staticEffectiveRuleGroup: RuleGroup;

  static fromApiEntity(apiPurchase:PurchaseType): Purchase {
    let purchase = new Purchase();
    purchase.id = apiPurchase.id;
    purchase.number = apiPurchase.number;
    purchase.createdDate = apiPurchase.createdDate;
    purchase.modifiedDate = apiPurchase.modifiedDate;
    purchase.closedDate = apiPurchase.closedDate;
    purchase.shortDescription = apiPurchase.shortDescription;
    purchase.requestNumber = apiPurchase.requestNumber;
    purchase.comments = apiPurchase.comments;
    purchase.customNumber = apiPurchase.customNumber;
    purchase.fromServiceCatalog = apiPurchase.fromServiceCatalog;
    purchase.associatedCost = apiPurchase.associatedCost;
    purchase.userBrowser = apiPurchase.userBrowser;
    purchase.userDevice = apiPurchase.userDevice;
    purchase.mySupportSubmissionIpAddress = apiPurchase.mySupportSubmissionIpAddress;
    purchase.modifiedByCustomer = apiPurchase.modifiedByCustomer;
    purchase.modifiedByAssignedCustomer = apiPurchase.modifiedByAssignedCustomer;
    purchase.approvalState = ApprovalRequestAction.enumOrdinalOf(parseInt(apiPurchase.approvalState, 10));
    if (apiPurchase.author) purchase.author = SupportRepresentative.fromApiEntity(apiPurchase.author);
    if (apiPurchase.modifiedBy) purchase.modifiedBy = SupportRepresentative.fromApiEntity(apiPurchase.modifiedBy);
    if (apiPurchase.status) purchase.status = PurchaseStatus.fromApiEntity(apiPurchase.status);
    if (apiPurchase.customerRequestedBy) purchase.customerRequestedBy = Customer.fromApiEntity(apiPurchase.customerRequestedBy);
    if (apiPurchase.customerRecipient) purchase.customerRecipient = Customer.fromApiEntity(apiPurchase.customerRecipient);
    if (apiPurchase.customerBillTo) purchase.customerBillTo = Customer.fromApiEntity(apiPurchase.customerBillTo);
    if (apiPurchase.repRequestedBy) purchase.repRequestedBy = SupportRepresentative.fromApiEntity(apiPurchase.repRequestedBy);
    if (apiPurchase.repRecipient) purchase.repRecipient = SupportRepresentative.fromApiEntity(apiPurchase.repRecipient);
    if (apiPurchase.repBillTo) purchase.repBillTo = SupportRepresentative.fromApiEntity(apiPurchase.repBillTo);
    if (apiPurchase.costCenter) purchase.costCenter = CostCenter.fromApiEntity(apiPurchase.costCenter);
    if (apiPurchase.jobFunction) purchase.jobFunction = JobFunction.fromApiEntity(apiPurchase.jobFunction);
    if (apiPurchase.sourceIncident) purchase.sourceIncident = Incident.fromApiEntity(apiPurchase.sourceIncident);
    if (apiPurchase.sourceProblem) purchase.sourceProblem = Problem.fromApiEntity(apiPurchase.sourceProblem);
    if (apiPurchase.sourceChange) purchase.sourceChange = Change.fromApiEntity(apiPurchase.sourceChange);
    if (apiPurchase.sourceAsset) purchase.sourceAsset = Asset.fromApiEntity(apiPurchase.sourceAsset);
    if (apiPurchase.template) purchase.template = PurchaseTemplate.fromApiEntity(apiPurchase.template);
    if (apiPurchase.customerRequestedByCompany) purchase.customerRequestedByCompany = Company.fromApiEntity(apiPurchase.customerRequestedByCompany);
    if (apiPurchase.customerRecipientCompany) purchase.customerRecipientCompany = Company.fromApiEntity(apiPurchase.customerRecipientCompany);
    if (apiPurchase.customerBillToCompany) purchase.customerBillToCompany = Company.fromApiEntity(apiPurchase.customerBillToCompany);
    if (apiPurchase.socialClient) purchase.socialClient = EndUserDesktopDefinition.fromApiEntity(apiPurchase.socialClient);
    if (apiPurchase.staticEffectiveRuleGroup) purchase.staticEffectiveRuleGroup = RuleGroup.fromApiEntity(apiPurchase.staticEffectiveRuleGroup);

    return purchase;
  }
}

export default Purchase;

export type PurchaseType = {
  id: number,
  number: string;
  createdDate: string;
  modifiedDate: string;
  closedDate: string;
  shortDescription: string;
  requestNumber: string;
  comments: string;
  customNumber: string;
  fromServiceCatalog: string;
  associatedCost: string;
  userBrowser: string;
  userDevice: string;
  mySupportSubmissionIpAddress: string;
  modifiedByCustomer: string;
  modifiedByAssignedCustomer: string;
  approvalState: ApprovalRequestAction;
  author: SupportRepresentative;
  modifiedBy: SupportRepresentative;
  status: PurchaseStatus;
  customerRequestedBy: Customer;
  customerRecipient: Customer;
  customerBillTo: Customer;
  repRequestedBy: SupportRepresentative;
  repRecipient: SupportRepresentative;
  repBillTo: SupportRepresentative;
  costCenter: CostCenter;
  jobFunction: JobFunction;
  sourceIncident: Incident;
  sourceProblem: Problem;
  sourceChange: Change;
  sourceAsset: Asset;
  template: PurchaseTemplate;
  customerRequestedByCompany: Company;
  customerRecipientCompany: Company;
  customerBillToCompany: Company;
  socialClient: EndUserDesktopDefinition;
  staticEffectiveRuleGroup: RuleGroup;
}

