//@flow
import EntityBase from './entityBase';
import ArchivedPurchaseCorrespondence from './ArchivedPurchaseCorrespondence';

export class ArchivedPurchaseCorrespondenceRecipient extends EntityBase {
  name: string;
  type: string;
  correspondence: ArchivedPurchaseCorrespondence;

  static fromApiEntity(apiArchivedPurchaseCorrespondenceRecipient:ArchivedPurchaseCorrespondenceRecipientType): ArchivedPurchaseCorrespondenceRecipient {
    let archivedPurchaseCorrespondenceRecipient = new ArchivedPurchaseCorrespondenceRecipient();
    archivedPurchaseCorrespondenceRecipient.id = apiArchivedPurchaseCorrespondenceRecipient.id;
    archivedPurchaseCorrespondenceRecipient.name = apiArchivedPurchaseCorrespondenceRecipient.name;
    archivedPurchaseCorrespondenceRecipient.type = apiArchivedPurchaseCorrespondenceRecipient.type;
    if (apiArchivedPurchaseCorrespondenceRecipient.correspondence) archivedPurchaseCorrespondenceRecipient.correspondence = ArchivedPurchaseCorrespondence.fromApiEntity(apiArchivedPurchaseCorrespondenceRecipient.correspondence);

    return archivedPurchaseCorrespondenceRecipient;
  }
}

export default ArchivedPurchaseCorrespondenceRecipient;

export type ArchivedPurchaseCorrespondenceRecipientType = {
  id: number,
  name: string;
  type: string;
  correspondence: ArchivedPurchaseCorrespondence;
}

