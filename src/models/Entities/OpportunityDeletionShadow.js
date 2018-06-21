//@flow
import EntityBase from './entityBase';

export class OpportunityDeletionShadow extends EntityBase {
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;

  static fromApiEntity(apiOpportunityDeletionShadow:OpportunityDeletionShadowType): OpportunityDeletionShadow {
    let opportunityDeletionShadow = new OpportunityDeletionShadow();
    opportunityDeletionShadow.id = apiOpportunityDeletionShadow.id;
    opportunityDeletionShadow.number = apiOpportunityDeletionShadow.number;
    opportunityDeletionShadow.dateDeleted = apiOpportunityDeletionShadow.dateDeleted;
    opportunityDeletionShadow.deletedBy = apiOpportunityDeletionShadow.deletedBy;
    opportunityDeletionShadow.originalIdentifier = apiOpportunityDeletionShadow.originalIdentifier;

    return opportunityDeletionShadow;
  }
}

export default OpportunityDeletionShadow;

export type OpportunityDeletionShadowType = {
  id: number,
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
}

