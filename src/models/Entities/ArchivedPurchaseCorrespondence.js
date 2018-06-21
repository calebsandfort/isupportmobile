//@flow
import EntityBase from './entityBase';
import ArchivedPurchase from './ArchivedPurchase';

export class ArchivedPurchaseCorrespondence extends EntityBase {
  dateMessage: string;
  subject: string;
  priority: string;
  from: string;
  body: string;
  rep: string;
  purchase: ArchivedPurchase;

  static fromApiEntity(apiArchivedPurchaseCorrespondence:ArchivedPurchaseCorrespondenceType): ArchivedPurchaseCorrespondence {
    let archivedPurchaseCorrespondence = new ArchivedPurchaseCorrespondence();
    archivedPurchaseCorrespondence.id = apiArchivedPurchaseCorrespondence.id;
    archivedPurchaseCorrespondence.dateMessage = apiArchivedPurchaseCorrespondence.dateMessage;
    archivedPurchaseCorrespondence.subject = apiArchivedPurchaseCorrespondence.subject;
    archivedPurchaseCorrespondence.priority = apiArchivedPurchaseCorrespondence.priority;
    archivedPurchaseCorrespondence.from = apiArchivedPurchaseCorrespondence.from;
    archivedPurchaseCorrespondence.body = apiArchivedPurchaseCorrespondence.body;
    archivedPurchaseCorrespondence.rep = apiArchivedPurchaseCorrespondence.rep;
    if (apiArchivedPurchaseCorrespondence.purchase) archivedPurchaseCorrespondence.purchase = ArchivedPurchase.fromApiEntity(apiArchivedPurchaseCorrespondence.purchase);

    return archivedPurchaseCorrespondence;
  }
}

export default ArchivedPurchaseCorrespondence;

export type ArchivedPurchaseCorrespondenceType = {
  id: number,
  dateMessage: string;
  subject: string;
  priority: string;
  from: string;
  body: string;
  rep: string;
  purchase: ArchivedPurchase;
}

