//@flow
import EntityBase from './entityBase';

export class ServiceContractAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
  createdDate: string;
  guid: string;

  static fromApiEntity(apiServiceContractAttachment:ServiceContractAttachmentType): ServiceContractAttachment {
    let serviceContractAttachment = new ServiceContractAttachment();
    serviceContractAttachment.id = apiServiceContractAttachment.id;
    serviceContractAttachment.fileName = apiServiceContractAttachment.fileName;
    serviceContractAttachment.fileType = apiServiceContractAttachment.fileType;
    serviceContractAttachment.fileSize = apiServiceContractAttachment.fileSize;
    serviceContractAttachment.fileData = apiServiceContractAttachment.fileData;
    serviceContractAttachment.createdDate = apiServiceContractAttachment.createdDate;
    serviceContractAttachment.guid = apiServiceContractAttachment.guid;

    return serviceContractAttachment;
  }
}

export default ServiceContractAttachment;

export type ServiceContractAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
  createdDate: string;
  guid: string;
}

