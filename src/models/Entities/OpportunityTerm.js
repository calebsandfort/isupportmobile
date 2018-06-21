//@flow
import EntityBase from './entityBase';

export class OpportunityTerm extends EntityBase {
  quickBooksIdentifier: string;
  quickBooksDomain: string;
  name: string;

  static fromApiEntity(apiOpportunityTerm:OpportunityTermType): OpportunityTerm {
    let opportunityTerm = new OpportunityTerm();
    opportunityTerm.id = apiOpportunityTerm.id;
    opportunityTerm.quickBooksIdentifier = apiOpportunityTerm.quickBooksIdentifier;
    opportunityTerm.quickBooksDomain = apiOpportunityTerm.quickBooksDomain;
    opportunityTerm.name = apiOpportunityTerm.name;

    return opportunityTerm;
  }
}

export default OpportunityTerm;

export type OpportunityTermType = {
  id: number,
  quickBooksIdentifier: string;
  quickBooksDomain: string;
  name: string;
}

