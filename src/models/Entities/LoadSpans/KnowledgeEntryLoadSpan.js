//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import RuleGroupLoadSpan from './RuleGroupLoadSpan';
import CategoryLoadSpan from './CategoryLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

export class KnowledgeEntryLoadSpan {
  problem: boolean;
  resolution: boolean;
  createdDate: boolean;
  number: boolean;
  source: boolean;
  declineComment: boolean;
  errorMessage: boolean;
  solutionSteps: boolean;
  cause: boolean;
  webLink: boolean;
  reviewDate: boolean;
  userBrowser: boolean;
  userDevice: boolean;
  capturedCount: boolean;
  modifiedDate: boolean;
  modifiedByCustomer: boolean;
  approvalStatus: boolean;
  staticEffectiveRuleGroup: RuleGroupLoadSpan;
  category: CategoryLoadSpan;
  author: SupportRepresentativeLoadSpan;
  reviewer: SupportRepresentativeLoadSpan;
  modifiedBy: SupportRepresentativeLoadSpan;

  constructor(){
    this.problem = false;
    this.resolution = false;
    this.createdDate = false;
    this.number = false;
    this.source = false;
    this.declineComment = false;
    this.errorMessage = false;
    this.solutionSteps = false;
    this.cause = false;
    this.webLink = false;
    this.reviewDate = false;
    this.userBrowser = false;
    this.userDevice = false;
    this.capturedCount = false;
    this.modifiedDate = false;
    this.modifiedByCustomer = false;
    this.approvalStatus = false;
  }

  get staticEffectiveRuleGroupLoadSpan(): RuleGroupLoadSpan {
    if(!this.staticEffectiveRuleGroup){
		this.staticEffectiveRuleGroup = new RuleGroupLoadSpan();
	}

    return this.staticEffectiveRuleGroup;
  }

  get categoryLoadSpan(): CategoryLoadSpan {
    if(!this.category){
		this.category = new CategoryLoadSpan();
	}

    return this.category;
  }

  get authorLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.author){
		this.author = new SupportRepresentativeLoadSpan();
	}

    return this.author;
  }

  get reviewerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.reviewer){
		this.reviewer = new SupportRepresentativeLoadSpan();
	}

    return this.reviewer;
  }

  get modifiedByLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.modifiedBy){
		this.modifiedBy = new SupportRepresentativeLoadSpan();
	}

    return this.modifiedBy;
  }

  loadAllProperties() {
    this.problem = true;
    this.resolution = true;
    this.createdDate = true;
    this.number = true;
    this.source = true;
    this.declineComment = true;
    this.errorMessage = true;
    this.solutionSteps = true;
    this.cause = true;
    this.webLink = true;
    this.reviewDate = true;
    this.userBrowser = true;
    this.userDevice = true;
    this.capturedCount = true;
    this.modifiedDate = true;
    this.modifiedByCustomer = true;
    this.approvalStatus = true;
  }
}

export default KnowledgeEntryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
