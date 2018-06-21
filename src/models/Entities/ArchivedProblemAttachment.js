//@flow
import EntityBase from './entityBase';
import ArchivedProblem from './ArchivedProblem';

export class ArchivedProblemAttachment extends EntityBase {
  fileName: string;
  fileData: string;
  fileType: string;
  problem: ArchivedProblem;

  static fromApiEntity(apiArchivedProblemAttachment:ArchivedProblemAttachmentType): ArchivedProblemAttachment {
    let archivedProblemAttachment = new ArchivedProblemAttachment();
    archivedProblemAttachment.id = apiArchivedProblemAttachment.id;
    archivedProblemAttachment.fileName = apiArchivedProblemAttachment.fileName;
    archivedProblemAttachment.fileData = apiArchivedProblemAttachment.fileData;
    archivedProblemAttachment.fileType = apiArchivedProblemAttachment.fileType;
    if (apiArchivedProblemAttachment.problem) archivedProblemAttachment.problem = ArchivedProblem.fromApiEntity(apiArchivedProblemAttachment.problem);

    return archivedProblemAttachment;
  }
}

export default ArchivedProblemAttachment;

export type ArchivedProblemAttachmentType = {
  id: number,
  fileName: string;
  fileData: string;
  fileType: string;
  problem: ArchivedProblem;
}

