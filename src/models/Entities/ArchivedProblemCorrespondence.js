//@flow
import EntityBase from './entityBase';
import ArchivedProblem from './ArchivedProblem';

export class ArchivedProblemCorrespondence extends EntityBase {
  dateMessage: string;
  subject: string;
  priority: string;
  from: string;
  body: string;
  rep: string;
  problem: ArchivedProblem;

  static fromApiEntity(apiArchivedProblemCorrespondence:ArchivedProblemCorrespondenceType): ArchivedProblemCorrespondence {
    let archivedProblemCorrespondence = new ArchivedProblemCorrespondence();
    archivedProblemCorrespondence.id = apiArchivedProblemCorrespondence.id;
    archivedProblemCorrespondence.dateMessage = apiArchivedProblemCorrespondence.dateMessage;
    archivedProblemCorrespondence.subject = apiArchivedProblemCorrespondence.subject;
    archivedProblemCorrespondence.priority = apiArchivedProblemCorrespondence.priority;
    archivedProblemCorrespondence.from = apiArchivedProblemCorrespondence.from;
    archivedProblemCorrespondence.body = apiArchivedProblemCorrespondence.body;
    archivedProblemCorrespondence.rep = apiArchivedProblemCorrespondence.rep;
    if (apiArchivedProblemCorrespondence.problem) archivedProblemCorrespondence.problem = ArchivedProblem.fromApiEntity(apiArchivedProblemCorrespondence.problem);

    return archivedProblemCorrespondence;
  }
}

export default ArchivedProblemCorrespondence;

export type ArchivedProblemCorrespondenceType = {
  id: number,
  dateMessage: string;
  subject: string;
  priority: string;
  from: string;
  body: string;
  rep: string;
  problem: ArchivedProblem;
}

