//@flow
import EntityBase from './entityBase';

export class ChangeTemplateAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
  guid: string;

  static fromApiEntity(apiChangeTemplateAttachment:ChangeTemplateAttachmentType): ChangeTemplateAttachment {
    let changeTemplateAttachment = new ChangeTemplateAttachment();
    changeTemplateAttachment.id = apiChangeTemplateAttachment.id;
    changeTemplateAttachment.fileName = apiChangeTemplateAttachment.fileName;
    changeTemplateAttachment.fileType = apiChangeTemplateAttachment.fileType;
    changeTemplateAttachment.fileSize = apiChangeTemplateAttachment.fileSize;
    changeTemplateAttachment.fileData = apiChangeTemplateAttachment.fileData;
    changeTemplateAttachment.guid = apiChangeTemplateAttachment.guid;

    return changeTemplateAttachment;
  }
}

export default ChangeTemplateAttachment;

export type ChangeTemplateAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
  guid: string;
}

