//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import OpportunityLineItemGroupLoadSpan from './OpportunityLineItemGroupLoadSpan';

export class OpportunityLineItemLoadSpan {
  quickBooksIdentifier: boolean;
  quickBooksDomain: boolean;
  name: boolean;
  shortDescription: boolean;
  description: boolean;
  rate: boolean;
  quantity: boolean;
  group: OpportunityLineItemGroupLoadSpan;
  baseOpportunityLineItem: OpportunityLineItemLoadSpan;

  constructor(){
    this.quickBooksIdentifier = false;
    this.quickBooksDomain = false;
    this.name = false;
    this.shortDescription = false;
    this.description = false;
    this.rate = false;
    this.quantity = false;
  }

  get groupLoadSpan(): OpportunityLineItemGroupLoadSpan {
    if(!this.group){
		this.group = new OpportunityLineItemGroupLoadSpan();
	}

    return this.group;
  }

  get baseOpportunityLineItemLoadSpan(): OpportunityLineItemLoadSpan {
    if(!this.baseOpportunityLineItem){
		this.baseOpportunityLineItem = new OpportunityLineItemLoadSpan();
	}

    return this.baseOpportunityLineItem;
  }

  loadAllProperties() {
    this.quickBooksIdentifier = true;
    this.quickBooksDomain = true;
    this.name = true;
    this.shortDescription = true;
    this.description = true;
    this.rate = true;
    this.quantity = true;
  }
}

export default OpportunityLineItemLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
