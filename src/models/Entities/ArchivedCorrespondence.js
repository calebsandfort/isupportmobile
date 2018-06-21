//@flow
import EntityBase from './entityBase';
import ArchivedIncident from './ArchivedIncident';

export class ArchivedCorrespondence extends EntityBase {
  oldEmailId: string;
  dateMessage: string;
  subject: string;
  priority: string;
  from: string;
  body: string;
  rep: string;
  incident: ArchivedIncident;

  static fromApiEntity(apiArchivedCorrespondence:ArchivedCorrespondenceType): ArchivedCorrespondence {
    let archivedCorrespondence = new ArchivedCorrespondence();
    archivedCorrespondence.id = apiArchivedCorrespondence.id;
    archivedCorrespondence.oldEmailId = apiArchivedCorrespondence.oldEmailId;
    archivedCorrespondence.dateMessage = apiArchivedCorrespondence.dateMessage;
    archivedCorrespondence.subject = apiArchivedCorrespondence.subject;
    archivedCorrespondence.priority = apiArchivedCorrespondence.priority;
    archivedCorrespondence.from = apiArchivedCorrespondence.from;
    archivedCorrespondence.body = apiArchivedCorrespondence.body;
    archivedCorrespondence.rep = apiArchivedCorrespondence.rep;
    if (apiArchivedCorrespondence.incident) archivedCorrespondence.incident = ArchivedIncident.fromApiEntity(apiArchivedCorrespondence.incident);

    return archivedCorrespondence;
  }
}

export default ArchivedCorrespondence;

export type ArchivedCorrespondenceType = {
  id: number,
  oldEmailId: string;
  dateMessage: string;
  subject: string;
  priority: string;
  from: string;
  body: string;
  rep: string;
  incident: ArchivedIncident;
}

