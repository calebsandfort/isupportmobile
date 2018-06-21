//@flow
import EntityBase from './entityBase';

export class PurchaseTemplateAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;

  static fromApiEntity(apiPurchaseTemplateAttachment:PurchaseTemplateAttachmentType): PurchaseTemplateAttachment {
    let purchaseTemplateAttachment = new PurchaseTemplateAttachment();
    purchaseTemplateAttachment.id = apiPurchaseTemplateAttachment.id;
    purchaseTemplateAttachment.fileName = apiPurchaseTemplateAttachment.fileName;
    purchaseTemplateAttachment.fileType = apiPurchaseTemplateAttachment.fileType;
    purchaseTemplateAttachment.fileSize = apiPurchaseTemplateAttachment.fileSize;
    purchaseTemplateAttachment.fileData = apiPurchaseTemplateAttachment.fileData;

    return purchaseTemplateAttachment;
  }
}

export default PurchaseTemplateAttachment;

export type PurchaseTemplateAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
}

