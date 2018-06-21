//@flow
import EntityBase from './entityBase';
import ArchivedCorrespondence from './ArchivedCorrespondence';

export class ArchivedCorrespondenceAttachment extends EntityBase {
  fileName: string;
  fileData: string;
  fileType: string;
  correspondence: ArchivedCorrespondence;

  static fromApiEntity(apiArchivedCorrespondenceAttachment:ArchivedCorrespondenceAttachmentType): ArchivedCorrespondenceAttachment {
    let archivedCorrespondenceAttachment = new ArchivedCorrespondenceAttachment();
    archivedCorrespondenceAttachment.id = apiArchivedCorrespondenceAttachment.id;
    archivedCorrespondenceAttachment.fileName = apiArchivedCorrespondenceAttachment.fileName;
    archivedCorrespondenceAttachment.fileData = apiArchivedCorrespondenceAttachment.fileData;
    archivedCorrespondenceAttachment.fileType = apiArchivedCorrespondenceAttachment.fileType;
    if (apiArchivedCorrespondenceAttachment.correspondence) archivedCorrespondenceAttachment.correspondence = ArchivedCorrespondence.fromApiEntity(apiArchivedCorrespondenceAttachment.correspondence);

    return archivedCorrespondenceAttachment;
  }
}

export default ArchivedCorrespondenceAttachment;

export type ArchivedCorrespondenceAttachmentType = {
  id: number,
  fileName: string;
  fileData: string;
  fileType: string;
  correspondence: ArchivedCorrespondence;
}

