//@flow
import EntityBase from './entityBase';

export class OpportunityLineItemGroup extends EntityBase {
  name: string;
  position: string;

  static fromApiEntity(apiOpportunityLineItemGroup:OpportunityLineItemGroupType): OpportunityLineItemGroup {
    let opportunityLineItemGroup = new OpportunityLineItemGroup();
    opportunityLineItemGroup.id = apiOpportunityLineItemGroup.id;
    opportunityLineItemGroup.name = apiOpportunityLineItemGroup.name;
    opportunityLineItemGroup.position = apiOpportunityLineItemGroup.position;

    return opportunityLineItemGroup;
  }
}

export default OpportunityLineItemGroup;

export type OpportunityLineItemGroupType = {
  id: number,
  name: string;
  position: string;
}

