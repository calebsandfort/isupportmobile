//@flow
import EntityBase from './entityBase';
import ArchivedChange from './ArchivedChange';

export class ArchivedChangeCorrespondence extends EntityBase {
  dateMessage: string;
  subject: string;
  priority: string;
  from: string;
  body: string;
  rep: string;
  change: ArchivedChange;

  static fromApiEntity(apiArchivedChangeCorrespondence:ArchivedChangeCorrespondenceType): ArchivedChangeCorrespondence {
    let archivedChangeCorrespondence = new ArchivedChangeCorrespondence();
    archivedChangeCorrespondence.id = apiArchivedChangeCorrespondence.id;
    archivedChangeCorrespondence.dateMessage = apiArchivedChangeCorrespondence.dateMessage;
    archivedChangeCorrespondence.subject = apiArchivedChangeCorrespondence.subject;
    archivedChangeCorrespondence.priority = apiArchivedChangeCorrespondence.priority;
    archivedChangeCorrespondence.from = apiArchivedChangeCorrespondence.from;
    archivedChangeCorrespondence.body = apiArchivedChangeCorrespondence.body;
    archivedChangeCorrespondence.rep = apiArchivedChangeCorrespondence.rep;
    if (apiArchivedChangeCorrespondence.change) archivedChangeCorrespondence.change = ArchivedChange.fromApiEntity(apiArchivedChangeCorrespondence.change);

    return archivedChangeCorrespondence;
  }
}

export default ArchivedChangeCorrespondence;

export type ArchivedChangeCorrespondenceType = {
  id: number,
  dateMessage: string;
  subject: string;
  priority: string;
  from: string;
  body: string;
  rep: string;
  change: ArchivedChange;
}

