//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import OpportunityLineItemGroupPropertyNames from './OpportunityLineItemGroupPropertyNames';

class OpportunityLineItemPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get quickBooksIdentifier (): string {
    return super.resolvePropertyName("QuickBooksIdentifier");
  }
  get quickBooksDomain (): string {
    return super.resolvePropertyName("QuickBooksDomain");
  }
  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get shortDescription (): string {
    return super.resolvePropertyName("ShortDescription");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get rate (): string {
    return super.resolvePropertyName("Rate");
  }
  get quantity (): string {
    return super.resolvePropertyName("Quantity");
  }
  get group (): OpportunityLineItemGroupPropertyNames {
    return new OpportunityLineItemGroupPropertyNames(super.resolvePropertyName("Group"));
  }
  get baseOpportunityLineItem (): OpportunityLineItemPropertyNames {
    return new OpportunityLineItemPropertyNames(super.resolvePropertyName("BaseOpportunityLineItem"));
  }
}

export default OpportunityLineItemPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
