//@flow
import EntityBase from './entityBase';
import OpportunityLineItemGroup from './OpportunityLineItemGroup';

export class OpportunityLineItem extends EntityBase {
  quickBooksIdentifier: string;
  quickBooksDomain: string;
  name: string;
  shortDescription: string;
  description: string;
  rate: string;
  quantity: string;
  group: OpportunityLineItemGroup;
  baseOpportunityLineItem: OpportunityLineItem;

  static fromApiEntity(apiOpportunityLineItem:OpportunityLineItemType): OpportunityLineItem {
    let opportunityLineItem = new OpportunityLineItem();
    opportunityLineItem.id = apiOpportunityLineItem.id;
    opportunityLineItem.quickBooksIdentifier = apiOpportunityLineItem.quickBooksIdentifier;
    opportunityLineItem.quickBooksDomain = apiOpportunityLineItem.quickBooksDomain;
    opportunityLineItem.name = apiOpportunityLineItem.name;
    opportunityLineItem.shortDescription = apiOpportunityLineItem.shortDescription;
    opportunityLineItem.description = apiOpportunityLineItem.description;
    opportunityLineItem.rate = apiOpportunityLineItem.rate;
    opportunityLineItem.quantity = apiOpportunityLineItem.quantity;
    if (apiOpportunityLineItem.group) opportunityLineItem.group = OpportunityLineItemGroup.fromApiEntity(apiOpportunityLineItem.group);
    if (apiOpportunityLineItem.baseOpportunityLineItem) opportunityLineItem.baseOpportunityLineItem = OpportunityLineItem.fromApiEntity(apiOpportunityLineItem.baseOpportunityLineItem);

    return opportunityLineItem;
  }
}

export default OpportunityLineItem;

export type OpportunityLineItemType = {
  id: number,
  quickBooksIdentifier: string;
  quickBooksDomain: string;
  name: string;
  shortDescription: string;
  description: string;
  rate: string;
  quantity: string;
  group: OpportunityLineItemGroup;
  baseOpportunityLineItem: OpportunityLineItem;
}

