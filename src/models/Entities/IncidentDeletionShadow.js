//@flow
import EntityBase from './entityBase';

export class IncidentDeletionShadow extends EntityBase {
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;

  static fromApiEntity(apiIncidentDeletionShadow:IncidentDeletionShadowType): IncidentDeletionShadow {
    let incidentDeletionShadow = new IncidentDeletionShadow();
    incidentDeletionShadow.id = apiIncidentDeletionShadow.id;
    incidentDeletionShadow.number = apiIncidentDeletionShadow.number;
    incidentDeletionShadow.dateDeleted = apiIncidentDeletionShadow.dateDeleted;
    incidentDeletionShadow.deletedBy = apiIncidentDeletionShadow.deletedBy;
    incidentDeletionShadow.originalIdentifier = apiIncidentDeletionShadow.originalIdentifier;

    return incidentDeletionShadow;
  }
}

export default IncidentDeletionShadow;

export type IncidentDeletionShadowType = {
  id: number,
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
}

