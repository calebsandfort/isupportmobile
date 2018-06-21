//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class IncidentSLAHistory extends EntityBase {
  createdDate: string;
  entry: string;
  incidentNumber: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiIncidentSLAHistory:IncidentSLAHistoryType): IncidentSLAHistory {
    let incidentSLAHistory = new IncidentSLAHistory();
    incidentSLAHistory.id = apiIncidentSLAHistory.id;
    incidentSLAHistory.createdDate = apiIncidentSLAHistory.createdDate;
    incidentSLAHistory.entry = apiIncidentSLAHistory.entry;
    incidentSLAHistory.incidentNumber = apiIncidentSLAHistory.incidentNumber;
    if (apiIncidentSLAHistory.owner) incidentSLAHistory.owner = SupportRepresentative.fromApiEntity(apiIncidentSLAHistory.owner);

    return incidentSLAHistory;
  }
}

export default IncidentSLAHistory;

export type IncidentSLAHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  incidentNumber: string;
  owner: SupportRepresentative;
}

