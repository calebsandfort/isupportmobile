//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class IncidentCorrespondenceHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiIncidentCorrespondenceHistory:IncidentCorrespondenceHistoryType): IncidentCorrespondenceHistory {
    let incidentCorrespondenceHistory = new IncidentCorrespondenceHistory();
    incidentCorrespondenceHistory.id = apiIncidentCorrespondenceHistory.id;
    incidentCorrespondenceHistory.createdDate = apiIncidentCorrespondenceHistory.createdDate;
    incidentCorrespondenceHistory.entry = apiIncidentCorrespondenceHistory.entry;
    if (apiIncidentCorrespondenceHistory.owner) incidentCorrespondenceHistory.owner = SupportRepresentative.fromApiEntity(apiIncidentCorrespondenceHistory.owner);

    return incidentCorrespondenceHistory;
  }
}

export default IncidentCorrespondenceHistory;

export type IncidentCorrespondenceHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

