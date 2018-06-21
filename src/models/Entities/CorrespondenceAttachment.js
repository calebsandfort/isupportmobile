//@flow
import EntityBase from './entityBase';

export class CorrespondenceAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;

  static fromApiEntity(apiCorrespondenceAttachment:CorrespondenceAttachmentType): CorrespondenceAttachment {
    let correspondenceAttachment = new CorrespondenceAttachment();
    correspondenceAttachment.id = apiCorrespondenceAttachment.id;
    correspondenceAttachment.fileName = apiCorrespondenceAttachment.fileName;
    correspondenceAttachment.fileType = apiCorrespondenceAttachment.fileType;
    correspondenceAttachment.fileSize = apiCorrespondenceAttachment.fileSize;
    correspondenceAttachment.fileData = apiCorrespondenceAttachment.fileData;

    return correspondenceAttachment;
  }
}

export default CorrespondenceAttachment;

export type CorrespondenceAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
}

