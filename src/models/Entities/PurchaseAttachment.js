//@flow
import EntityBase from './entityBase';

export class PurchaseAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
  createdDate: string;

  static fromApiEntity(apiPurchaseAttachment:PurchaseAttachmentType): PurchaseAttachment {
    let purchaseAttachment = new PurchaseAttachment();
    purchaseAttachment.id = apiPurchaseAttachment.id;
    purchaseAttachment.fileName = apiPurchaseAttachment.fileName;
    purchaseAttachment.fileType = apiPurchaseAttachment.fileType;
    purchaseAttachment.fileSize = apiPurchaseAttachment.fileSize;
    purchaseAttachment.number = apiPurchaseAttachment.number;
    purchaseAttachment.fileData = apiPurchaseAttachment.fileData;
    purchaseAttachment.createdDate = apiPurchaseAttachment.createdDate;

    return purchaseAttachment;
  }
}

export default PurchaseAttachment;

export type PurchaseAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
  createdDate: string;
}

