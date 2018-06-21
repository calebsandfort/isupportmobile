//@flow
import EntityBase from './entityBase';

export class ProblemAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
  createdDate: string;

  static fromApiEntity(apiProblemAttachment:ProblemAttachmentType): ProblemAttachment {
    let problemAttachment = new ProblemAttachment();
    problemAttachment.id = apiProblemAttachment.id;
    problemAttachment.fileName = apiProblemAttachment.fileName;
    problemAttachment.fileType = apiProblemAttachment.fileType;
    problemAttachment.fileSize = apiProblemAttachment.fileSize;
    problemAttachment.number = apiProblemAttachment.number;
    problemAttachment.fileData = apiProblemAttachment.fileData;
    problemAttachment.createdDate = apiProblemAttachment.createdDate;

    return problemAttachment;
  }
}

export default ProblemAttachment;

export type ProblemAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  number: string;
  fileData: string;
  createdDate: string;
}

