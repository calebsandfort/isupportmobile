//@flow
import EntityBase from './entityBase';
import RuleGroup from './RuleGroup';
import Category from './Category';
import SupportRepresentative from './SupportRepresentative';
import {KnowledgeApprovalStatusTypes} from './Enums';

export class KnowledgeEntry extends EntityBase {
  problem: string;
  resolution: string;
  createdDate: string;
  number: string;
  source: string;
  declineComment: string;
  errorMessage: string;
  solutionSteps: string;
  cause: string;
  webLink: string;
  reviewDate: string;
  userBrowser: string;
  userDevice: string;
  capturedCount: string;
  modifiedDate: string;
  modifiedByCustomer: string;
  approvalStatus: KnowledgeApprovalStatusTypes;
  staticEffectiveRuleGroup: RuleGroup;
  category: Category;
  author: SupportRepresentative;
  reviewer: SupportRepresentative;
  modifiedBy: SupportRepresentative;

  static fromApiEntity(apiKnowledgeEntry:KnowledgeEntryType): KnowledgeEntry {
    let knowledgeEntry = new KnowledgeEntry();
    knowledgeEntry.id = apiKnowledgeEntry.id;
    knowledgeEntry.problem = apiKnowledgeEntry.problem;
    knowledgeEntry.resolution = apiKnowledgeEntry.resolution;
    knowledgeEntry.createdDate = apiKnowledgeEntry.createdDate;
    knowledgeEntry.number = apiKnowledgeEntry.number;
    knowledgeEntry.source = apiKnowledgeEntry.source;
    knowledgeEntry.declineComment = apiKnowledgeEntry.declineComment;
    knowledgeEntry.errorMessage = apiKnowledgeEntry.errorMessage;
    knowledgeEntry.solutionSteps = apiKnowledgeEntry.solutionSteps;
    knowledgeEntry.cause = apiKnowledgeEntry.cause;
    knowledgeEntry.webLink = apiKnowledgeEntry.webLink;
    knowledgeEntry.reviewDate = apiKnowledgeEntry.reviewDate;
    knowledgeEntry.userBrowser = apiKnowledgeEntry.userBrowser;
    knowledgeEntry.userDevice = apiKnowledgeEntry.userDevice;
    knowledgeEntry.capturedCount = apiKnowledgeEntry.capturedCount;
    knowledgeEntry.modifiedDate = apiKnowledgeEntry.modifiedDate;
    knowledgeEntry.modifiedByCustomer = apiKnowledgeEntry.modifiedByCustomer;
    knowledgeEntry.approvalStatus = KnowledgeApprovalStatusTypes.enumOrdinalOf(parseInt(apiKnowledgeEntry.approvalStatus, 10));
    if (apiKnowledgeEntry.staticEffectiveRuleGroup) knowledgeEntry.staticEffectiveRuleGroup = RuleGroup.fromApiEntity(apiKnowledgeEntry.staticEffectiveRuleGroup);
    if (apiKnowledgeEntry.category) knowledgeEntry.category = Category.fromApiEntity(apiKnowledgeEntry.category);
    if (apiKnowledgeEntry.author) knowledgeEntry.author = SupportRepresentative.fromApiEntity(apiKnowledgeEntry.author);
    if (apiKnowledgeEntry.reviewer) knowledgeEntry.reviewer = SupportRepresentative.fromApiEntity(apiKnowledgeEntry.reviewer);
    if (apiKnowledgeEntry.modifiedBy) knowledgeEntry.modifiedBy = SupportRepresentative.fromApiEntity(apiKnowledgeEntry.modifiedBy);

    return knowledgeEntry;
  }
}

export default KnowledgeEntry;

export type KnowledgeEntryType = {
  id: number,
  problem: string;
  resolution: string;
  createdDate: string;
  number: string;
  source: string;
  declineComment: string;
  errorMessage: string;
  solutionSteps: string;
  cause: string;
  webLink: string;
  reviewDate: string;
  userBrowser: string;
  userDevice: string;
  capturedCount: string;
  modifiedDate: string;
  modifiedByCustomer: string;
  approvalStatus: KnowledgeApprovalStatusTypes;
  staticEffectiveRuleGroup: RuleGroup;
  category: Category;
  author: SupportRepresentative;
  reviewer: SupportRepresentative;
  modifiedBy: SupportRepresentative;
}

