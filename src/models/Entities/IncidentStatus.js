//@flow
import EntityBase from './entityBase';
import {IncidentStatusTypes} from './Enums';

export class IncidentStatus extends EntityBase {
  label: string;
  labelOnEud: string;
  type: IncidentStatusTypes;

  static fromApiEntity(apiIncidentStatus:IncidentStatusType): IncidentStatus {
    let incidentStatus = new IncidentStatus();
    incidentStatus.id = apiIncidentStatus.id;
    incidentStatus.label = apiIncidentStatus.label;
    incidentStatus.labelOnEud = apiIncidentStatus.labelOnEud;
    incidentStatus.type = IncidentStatusTypes.enumOrdinalOf(parseInt(apiIncidentStatus.type, 10));

    return incidentStatus;
  }
}

export default IncidentStatus;

export type IncidentStatusType = {
  id: number,
  label: string;
  labelOnEud: string;
  type: IncidentStatusTypes;
}

