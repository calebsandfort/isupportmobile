//@flow
import EntityBase from './entityBase';

export class OpportunityType extends EntityBase {
  name: string;

  static fromApiEntity(apiOpportunityType:OpportunityTypeType): OpportunityType {
    let opportunityType = new OpportunityType();
    opportunityType.id = apiOpportunityType.id;
    opportunityType.name = apiOpportunityType.name;

    return opportunityType;
  }
}

export default OpportunityType;

export type OpportunityTypeType = {
  id: number,
  name: string;
}

