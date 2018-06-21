//@flow
import EntityBase from './entityBase';

export class IncidentTemplateAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;

  static fromApiEntity(apiIncidentTemplateAttachment:IncidentTemplateAttachmentType): IncidentTemplateAttachment {
    let incidentTemplateAttachment = new IncidentTemplateAttachment();
    incidentTemplateAttachment.id = apiIncidentTemplateAttachment.id;
    incidentTemplateAttachment.fileName = apiIncidentTemplateAttachment.fileName;
    incidentTemplateAttachment.fileType = apiIncidentTemplateAttachment.fileType;
    incidentTemplateAttachment.fileSize = apiIncidentTemplateAttachment.fileSize;
    incidentTemplateAttachment.fileData = apiIncidentTemplateAttachment.fileData;

    return incidentTemplateAttachment;
  }
}

export default IncidentTemplateAttachment;

export type IncidentTemplateAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
}

