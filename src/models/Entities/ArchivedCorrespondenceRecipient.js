//@flow
import EntityBase from './entityBase';
import ArchivedCorrespondence from './ArchivedCorrespondence';

export class ArchivedCorrespondenceRecipient extends EntityBase {
  name: string;
  type: string;
  correspondence: ArchivedCorrespondence;

  static fromApiEntity(apiArchivedCorrespondenceRecipient:ArchivedCorrespondenceRecipientType): ArchivedCorrespondenceRecipient {
    let archivedCorrespondenceRecipient = new ArchivedCorrespondenceRecipient();
    archivedCorrespondenceRecipient.id = apiArchivedCorrespondenceRecipient.id;
    archivedCorrespondenceRecipient.name = apiArchivedCorrespondenceRecipient.name;
    archivedCorrespondenceRecipient.type = apiArchivedCorrespondenceRecipient.type;
    if (apiArchivedCorrespondenceRecipient.correspondence) archivedCorrespondenceRecipient.correspondence = ArchivedCorrespondence.fromApiEntity(apiArchivedCorrespondenceRecipient.correspondence);

    return archivedCorrespondenceRecipient;
  }
}

export default ArchivedCorrespondenceRecipient;

export type ArchivedCorrespondenceRecipientType = {
  id: number,
  name: string;
  type: string;
  correspondence: ArchivedCorrespondence;
}

