//@flow
import EntityBase from './entityBase';
import ArchivedProblemCorrespondence from './ArchivedProblemCorrespondence';

export class ArchivedProblemCorrespondenceAttachment extends EntityBase {
  fileName: string;
  fileData: string;
  fileType: string;
  correspondence: ArchivedProblemCorrespondence;

  static fromApiEntity(apiArchivedProblemCorrespondenceAttachment:ArchivedProblemCorrespondenceAttachmentType): ArchivedProblemCorrespondenceAttachment {
    let archivedProblemCorrespondenceAttachment = new ArchivedProblemCorrespondenceAttachment();
    archivedProblemCorrespondenceAttachment.id = apiArchivedProblemCorrespondenceAttachment.id;
    archivedProblemCorrespondenceAttachment.fileName = apiArchivedProblemCorrespondenceAttachment.fileName;
    archivedProblemCorrespondenceAttachment.fileData = apiArchivedProblemCorrespondenceAttachment.fileData;
    archivedProblemCorrespondenceAttachment.fileType = apiArchivedProblemCorrespondenceAttachment.fileType;
    if (apiArchivedProblemCorrespondenceAttachment.correspondence) archivedProblemCorrespondenceAttachment.correspondence = ArchivedProblemCorrespondence.fromApiEntity(apiArchivedProblemCorrespondenceAttachment.correspondence);

    return archivedProblemCorrespondenceAttachment;
  }
}

export default ArchivedProblemCorrespondenceAttachment;

export type ArchivedProblemCorrespondenceAttachmentType = {
  id: number,
  fileName: string;
  fileData: string;
  fileType: string;
  correspondence: ArchivedProblemCorrespondence;
}

