//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';
import CompanyLoadSpan from './CompanyLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import OpportunityStageLoadSpan from './OpportunityStageLoadSpan';
import OpportunityTypeLoadSpan from './OpportunityTypeLoadSpan';
import OpportunityTermLoadSpan from './OpportunityTermLoadSpan';

export class OpportunityLoadSpan {
  number: boolean;
  guid: boolean;
  createdDate: boolean;
  modifiedDate: boolean;
  estimatedCloseDate: boolean;
  topic: boolean;
  description: boolean;
  commentsForQuote: boolean;
  winLossReason: boolean;
  probability: boolean;
  campaignMatchType: boolean;
  campaignVariant: boolean;
  campaignKeyword: boolean;
  modifiedByCustomer: boolean;
  modifiedByAssignedCustomer: boolean;
  purchaseOrder: boolean;
  customer: CustomerLoadSpan;
  company: CompanyLoadSpan;
  assignee: SupportRepresentativeLoadSpan;
  group: GroupLoadSpan;
  stage: OpportunityStageLoadSpan;
  opportunityType: OpportunityTypeLoadSpan;
  terms: OpportunityTermLoadSpan;
  modifiedBy: SupportRepresentativeLoadSpan;

  constructor(){
    this.number = false;
    this.guid = false;
    this.createdDate = false;
    this.modifiedDate = false;
    this.estimatedCloseDate = false;
    this.topic = false;
    this.description = false;
    this.commentsForQuote = false;
    this.winLossReason = false;
    this.probability = false;
    this.campaignMatchType = false;
    this.campaignVariant = false;
    this.campaignKeyword = false;
    this.modifiedByCustomer = false;
    this.modifiedByAssignedCustomer = false;
    this.purchaseOrder = false;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get companyLoadSpan(): CompanyLoadSpan {
    if(!this.company){
		this.company = new CompanyLoadSpan();
	}

    return this.company;
  }

  get assigneeLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.assignee){
		this.assignee = new SupportRepresentativeLoadSpan();
	}

    return this.assignee;
  }

  get groupLoadSpan(): GroupLoadSpan {
    if(!this.group){
		this.group = new GroupLoadSpan();
	}

    return this.group;
  }

  get stageLoadSpan(): OpportunityStageLoadSpan {
    if(!this.stage){
		this.stage = new OpportunityStageLoadSpan();
	}

    return this.stage;
  }

  get opportunityTypeLoadSpan(): OpportunityTypeLoadSpan {
    if(!this.opportunityType){
		this.opportunityType = new OpportunityTypeLoadSpan();
	}

    return this.opportunityType;
  }

  get termsLoadSpan(): OpportunityTermLoadSpan {
    if(!this.terms){
		this.terms = new OpportunityTermLoadSpan();
	}

    return this.terms;
  }

  get modifiedByLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.modifiedBy){
		this.modifiedBy = new SupportRepresentativeLoadSpan();
	}

    return this.modifiedBy;
  }

  loadAllProperties() {
    this.number = true;
    this.guid = true;
    this.createdDate = true;
    this.modifiedDate = true;
    this.estimatedCloseDate = true;
    this.topic = true;
    this.description = true;
    this.commentsForQuote = true;
    this.winLossReason = true;
    this.probability = true;
    this.campaignMatchType = true;
    this.campaignVariant = true;
    this.campaignKeyword = true;
    this.modifiedByCustomer = true;
    this.modifiedByAssignedCustomer = true;
    this.purchaseOrder = true;
  }
}

export default OpportunityLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
