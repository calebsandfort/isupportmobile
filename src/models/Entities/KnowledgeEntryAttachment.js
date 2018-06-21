//@flow
import EntityBase from './entityBase';

export class KnowledgeEntryAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;

  static fromApiEntity(apiKnowledgeEntryAttachment:KnowledgeEntryAttachmentType): KnowledgeEntryAttachment {
    let knowledgeEntryAttachment = new KnowledgeEntryAttachment();
    knowledgeEntryAttachment.id = apiKnowledgeEntryAttachment.id;
    knowledgeEntryAttachment.fileName = apiKnowledgeEntryAttachment.fileName;
    knowledgeEntryAttachment.fileType = apiKnowledgeEntryAttachment.fileType;
    knowledgeEntryAttachment.fileSize = apiKnowledgeEntryAttachment.fileSize;
    knowledgeEntryAttachment.number = apiKnowledgeEntryAttachment.number;
    knowledgeEntryAttachment.fileData = apiKnowledgeEntryAttachment.fileData;

    return knowledgeEntryAttachment;
  }
}

export default KnowledgeEntryAttachment;

export type KnowledgeEntryAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
}

