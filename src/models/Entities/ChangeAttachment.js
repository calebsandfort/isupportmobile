//@flow
import EntityBase from './entityBase';

export class ChangeAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
  createdDate: string;

  static fromApiEntity(apiChangeAttachment:ChangeAttachmentType): ChangeAttachment {
    let changeAttachment = new ChangeAttachment();
    changeAttachment.id = apiChangeAttachment.id;
    changeAttachment.fileName = apiChangeAttachment.fileName;
    changeAttachment.fileType = apiChangeAttachment.fileType;
    changeAttachment.fileSize = apiChangeAttachment.fileSize;
    changeAttachment.number = apiChangeAttachment.number;
    changeAttachment.fileData = apiChangeAttachment.fileData;
    changeAttachment.createdDate = apiChangeAttachment.createdDate;

    return changeAttachment;
  }
}

export default ChangeAttachment;

export type ChangeAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
  createdDate: string;
}

