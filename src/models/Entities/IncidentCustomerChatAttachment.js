//@flow
import EntityBase from './entityBase';

export class IncidentCustomerChatAttachment extends EntityBase {
  createdDate: string;
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
  chatSessionKey: string;

  static fromApiEntity(apiIncidentCustomerChatAttachment:IncidentCustomerChatAttachmentType): IncidentCustomerChatAttachment {
    let incidentCustomerChatAttachment = new IncidentCustomerChatAttachment();
    incidentCustomerChatAttachment.id = apiIncidentCustomerChatAttachment.id;
    incidentCustomerChatAttachment.createdDate = apiIncidentCustomerChatAttachment.createdDate;
    incidentCustomerChatAttachment.fileName = apiIncidentCustomerChatAttachment.fileName;
    incidentCustomerChatAttachment.fileType = apiIncidentCustomerChatAttachment.fileType;
    incidentCustomerChatAttachment.fileSize = apiIncidentCustomerChatAttachment.fileSize;
    incidentCustomerChatAttachment.fileData = apiIncidentCustomerChatAttachment.fileData;
    incidentCustomerChatAttachment.chatSessionKey = apiIncidentCustomerChatAttachment.chatSessionKey;

    return incidentCustomerChatAttachment;
  }
}

export default IncidentCustomerChatAttachment;

export type IncidentCustomerChatAttachmentType = {
  id: number,
  createdDate: string;
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
  chatSessionKey: string;
}

