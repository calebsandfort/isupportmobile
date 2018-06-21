//@flow
import EntityBase from './entityBase';

export class IncidentAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
  createdDate: string;

  static fromApiEntity(apiIncidentAttachment:IncidentAttachmentType): IncidentAttachment {
    let incidentAttachment = new IncidentAttachment();
    incidentAttachment.id = apiIncidentAttachment.id;
    incidentAttachment.fileName = apiIncidentAttachment.fileName;
    incidentAttachment.fileType = apiIncidentAttachment.fileType;
    incidentAttachment.fileSize = apiIncidentAttachment.fileSize;
    incidentAttachment.number = apiIncidentAttachment.number;
    incidentAttachment.fileData = apiIncidentAttachment.fileData;
    incidentAttachment.createdDate = apiIncidentAttachment.createdDate;

    return incidentAttachment;
  }
}

export default IncidentAttachment;

export type IncidentAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
  createdDate: string;
}

