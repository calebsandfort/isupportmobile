//@flow
import EntityBase from './entityBase';

export class OpportunityAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  guid: string;
  fileData: string;
  createdDate: string;

  static fromApiEntity(apiOpportunityAttachment:OpportunityAttachmentType): OpportunityAttachment {
    let opportunityAttachment = new OpportunityAttachment();
    opportunityAttachment.id = apiOpportunityAttachment.id;
    opportunityAttachment.fileName = apiOpportunityAttachment.fileName;
    opportunityAttachment.fileType = apiOpportunityAttachment.fileType;
    opportunityAttachment.fileSize = apiOpportunityAttachment.fileSize;
    opportunityAttachment.guid = apiOpportunityAttachment.guid;
    opportunityAttachment.fileData = apiOpportunityAttachment.fileData;
    opportunityAttachment.createdDate = apiOpportunityAttachment.createdDate;

    return opportunityAttachment;
  }
}

export default OpportunityAttachment;

export type OpportunityAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  guid: string;
  fileData: string;
  createdDate: string;
}

