//@flow
import EntityBase from './entityBase';
import ArchivedPurchase from './ArchivedPurchase';

export class ArchivedPurchaseAttachment extends EntityBase {
  fileName: string;
  fileData: string;
  fileType: string;
  purchase: ArchivedPurchase;

  static fromApiEntity(apiArchivedPurchaseAttachment:ArchivedPurchaseAttachmentType): ArchivedPurchaseAttachment {
    let archivedPurchaseAttachment = new ArchivedPurchaseAttachment();
    archivedPurchaseAttachment.id = apiArchivedPurchaseAttachment.id;
    archivedPurchaseAttachment.fileName = apiArchivedPurchaseAttachment.fileName;
    archivedPurchaseAttachment.fileData = apiArchivedPurchaseAttachment.fileData;
    archivedPurchaseAttachment.fileType = apiArchivedPurchaseAttachment.fileType;
    if (apiArchivedPurchaseAttachment.purchase) archivedPurchaseAttachment.purchase = ArchivedPurchase.fromApiEntity(apiArchivedPurchaseAttachment.purchase);

    return archivedPurchaseAttachment;
  }
}

export default ArchivedPurchaseAttachment;

export type ArchivedPurchaseAttachmentType = {
  id: number,
  fileName: string;
  fileData: string;
  fileType: string;
  purchase: ArchivedPurchase;
}

