//@flow
import EntityBase from './entityBase';

export class OpportunityStage extends EntityBase {
  name: string;

  static fromApiEntity(apiOpportunityStage:OpportunityStageType): OpportunityStage {
    let opportunityStage = new OpportunityStage();
    opportunityStage.id = apiOpportunityStage.id;
    opportunityStage.name = apiOpportunityStage.name;

    return opportunityStage;
  }
}

export default OpportunityStage;

export type OpportunityStageType = {
  id: number,
  name: string;
}

