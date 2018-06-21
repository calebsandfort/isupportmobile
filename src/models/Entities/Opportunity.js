//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import Company from './Company';
import SupportRepresentative from './SupportRepresentative';
import Group from './Group';
import OpportunityStage from './OpportunityStage';
import OpportunityType from './OpportunityType';
import OpportunityTerm from './OpportunityTerm';

export class Opportunity extends EntityBase {
  number: string;
  guid: string;
  createdDate: string;
  modifiedDate: string;
  estimatedCloseDate: string;
  topic: string;
  description: string;
  commentsForQuote: string;
  winLossReason: string;
  probability: string;
  campaignMatchType: string;
  campaignVariant: string;
  campaignKeyword: string;
  modifiedByCustomer: string;
  modifiedByAssignedCustomer: string;
  purchaseOrder: string;
  customer: Customer;
  company: Company;
  assignee: SupportRepresentative;
  group: Group;
  stage: OpportunityStage;
  opportunityType: OpportunityType;
  terms: OpportunityTerm;
  modifiedBy: SupportRepresentative;

  static fromApiEntity(apiOpportunity:OpportunityEntityType): Opportunity {
    let opportunity = new Opportunity();
    opportunity.id = apiOpportunity.id;
    opportunity.number = apiOpportunity.number;
    opportunity.guid = apiOpportunity.guid;
    opportunity.createdDate = apiOpportunity.createdDate;
    opportunity.modifiedDate = apiOpportunity.modifiedDate;
    opportunity.estimatedCloseDate = apiOpportunity.estimatedCloseDate;
    opportunity.topic = apiOpportunity.topic;
    opportunity.description = apiOpportunity.description;
    opportunity.commentsForQuote = apiOpportunity.commentsForQuote;
    opportunity.winLossReason = apiOpportunity.winLossReason;
    opportunity.probability = apiOpportunity.probability;
    opportunity.campaignMatchType = apiOpportunity.campaignMatchType;
    opportunity.campaignVariant = apiOpportunity.campaignVariant;
    opportunity.campaignKeyword = apiOpportunity.campaignKeyword;
    opportunity.modifiedByCustomer = apiOpportunity.modifiedByCustomer;
    opportunity.modifiedByAssignedCustomer = apiOpportunity.modifiedByAssignedCustomer;
    opportunity.purchaseOrder = apiOpportunity.purchaseOrder;
    if (apiOpportunity.customer) opportunity.customer = Customer.fromApiEntity(apiOpportunity.customer);
    if (apiOpportunity.company) opportunity.company = Company.fromApiEntity(apiOpportunity.company);
    if (apiOpportunity.assignee) opportunity.assignee = SupportRepresentative.fromApiEntity(apiOpportunity.assignee);
    if (apiOpportunity.group) opportunity.group = Group.fromApiEntity(apiOpportunity.group);
    if (apiOpportunity.stage) opportunity.stage = OpportunityStage.fromApiEntity(apiOpportunity.stage);
    if (apiOpportunity.opportunityType) opportunity.opportunityType = OpportunityType.fromApiEntity(apiOpportunity.opportunityType);
    if (apiOpportunity.terms) opportunity.terms = OpportunityTerm.fromApiEntity(apiOpportunity.terms);
    if (apiOpportunity.modifiedBy) opportunity.modifiedBy = SupportRepresentative.fromApiEntity(apiOpportunity.modifiedBy);

    return opportunity;
  }
}

export default Opportunity;

export type OpportunityEntityType = {
  id: number,
  number: string;
  guid: string;
  createdDate: string;
  modifiedDate: string;
  estimatedCloseDate: string;
  topic: string;
  description: string;
  commentsForQuote: string;
  winLossReason: string;
  probability: string;
  campaignMatchType: string;
  campaignVariant: string;
  campaignKeyword: string;
  modifiedByCustomer: string;
  modifiedByAssignedCustomer: string;
  purchaseOrder: string;
  customer: Customer;
  company: Company;
  assignee: SupportRepresentative;
  group: Group;
  stage: OpportunityStage;
  opportunityType: OpportunityType;
  terms: OpportunityTerm;
  modifiedBy: SupportRepresentative;
}
