//@flow
import EntityBase from './entityBase';
import ArchivedChangeCorrespondence from './ArchivedChangeCorrespondence';

export class ArchivedChangeCorrespondenceRecipient extends EntityBase {
  name: string;
  type: string;
  correspondence: ArchivedChangeCorrespondence;

  static fromApiEntity(apiArchivedChangeCorrespondenceRecipient:ArchivedChangeCorrespondenceRecipientType): ArchivedChangeCorrespondenceRecipient {
    let archivedChangeCorrespondenceRecipient = new ArchivedChangeCorrespondenceRecipient();
    archivedChangeCorrespondenceRecipient.id = apiArchivedChangeCorrespondenceRecipient.id;
    archivedChangeCorrespondenceRecipient.name = apiArchivedChangeCorrespondenceRecipient.name;
    archivedChangeCorrespondenceRecipient.type = apiArchivedChangeCorrespondenceRecipient.type;
    if (apiArchivedChangeCorrespondenceRecipient.correspondence) archivedChangeCorrespondenceRecipient.correspondence = ArchivedChangeCorrespondence.fromApiEntity(apiArchivedChangeCorrespondenceRecipient.correspondence);

    return archivedChangeCorrespondenceRecipient;
  }
}

export default ArchivedChangeCorrespondenceRecipient;

export type ArchivedChangeCorrespondenceRecipientType = {
  id: number,
  name: string;
  type: string;
  correspondence: ArchivedChangeCorrespondence;
}

