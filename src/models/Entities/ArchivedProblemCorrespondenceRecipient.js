//@flow
import EntityBase from './entityBase';
import ArchivedProblemCorrespondence from './ArchivedProblemCorrespondence';

export class ArchivedProblemCorrespondenceRecipient extends EntityBase {
  name: string;
  type: string;
  correspondence: ArchivedProblemCorrespondence;

  static fromApiEntity(apiArchivedProblemCorrespondenceRecipient:ArchivedProblemCorrespondenceRecipientType): ArchivedProblemCorrespondenceRecipient {
    let archivedProblemCorrespondenceRecipient = new ArchivedProblemCorrespondenceRecipient();
    archivedProblemCorrespondenceRecipient.id = apiArchivedProblemCorrespondenceRecipient.id;
    archivedProblemCorrespondenceRecipient.name = apiArchivedProblemCorrespondenceRecipient.name;
    archivedProblemCorrespondenceRecipient.type = apiArchivedProblemCorrespondenceRecipient.type;
    if (apiArchivedProblemCorrespondenceRecipient.correspondence) archivedProblemCorrespondenceRecipient.correspondence = ArchivedProblemCorrespondence.fromApiEntity(apiArchivedProblemCorrespondenceRecipient.correspondence);

    return archivedProblemCorrespondenceRecipient;
  }
}

export default ArchivedProblemCorrespondenceRecipient;

export type ArchivedProblemCorrespondenceRecipientType = {
  id: number,
  name: string;
  type: string;
  correspondence: ArchivedProblemCorrespondence;
}

