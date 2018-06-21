//@flow
import EntityBase from './entityBase';
import ArchivedPurchaseCorrespondence from './ArchivedPurchaseCorrespondence';

export class ArchivedPurchaseCorrespondenceAttachment extends EntityBase {
  fileName: string;
  fileData: string;
  fileType: string;
  correspondence: ArchivedPurchaseCorrespondence;

  static fromApiEntity(apiArchivedPurchaseCorrespondenceAttachment:ArchivedPurchaseCorrespondenceAttachmentType): ArchivedPurchaseCorrespondenceAttachment {
    let archivedPurchaseCorrespondenceAttachment = new ArchivedPurchaseCorrespondenceAttachment();
    archivedPurchaseCorrespondenceAttachment.id = apiArchivedPurchaseCorrespondenceAttachment.id;
    archivedPurchaseCorrespondenceAttachment.fileName = apiArchivedPurchaseCorrespondenceAttachment.fileName;
    archivedPurchaseCorrespondenceAttachment.fileData = apiArchivedPurchaseCorrespondenceAttachment.fileData;
    archivedPurchaseCorrespondenceAttachment.fileType = apiArchivedPurchaseCorrespondenceAttachment.fileType;
    if (apiArchivedPurchaseCorrespondenceAttachment.correspondence) archivedPurchaseCorrespondenceAttachment.correspondence = ArchivedPurchaseCorrespondence.fromApiEntity(apiArchivedPurchaseCorrespondenceAttachment.correspondence);

    return archivedPurchaseCorrespondenceAttachment;
  }
}

export default ArchivedPurchaseCorrespondenceAttachment;

export type ArchivedPurchaseCorrespondenceAttachmentType = {
  id: number,
  fileName: string;
  fileData: string;
  fileType: string;
  correspondence: ArchivedPurchaseCorrespondence;
}

