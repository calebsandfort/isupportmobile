//@flow
import EntityBase from './entityBase';
import ArchivedChangeCorrespondence from './ArchivedChangeCorrespondence';

export class ArchivedChangeCorrespondenceAttachment extends EntityBase {
  fileName: string;
  fileData: string;
  fileType: string;
  correspondence: ArchivedChangeCorrespondence;

  static fromApiEntity(apiArchivedChangeCorrespondenceAttachment:ArchivedChangeCorrespondenceAttachmentType): ArchivedChangeCorrespondenceAttachment {
    let archivedChangeCorrespondenceAttachment = new ArchivedChangeCorrespondenceAttachment();
    archivedChangeCorrespondenceAttachment.id = apiArchivedChangeCorrespondenceAttachment.id;
    archivedChangeCorrespondenceAttachment.fileName = apiArchivedChangeCorrespondenceAttachment.fileName;
    archivedChangeCorrespondenceAttachment.fileData = apiArchivedChangeCorrespondenceAttachment.fileData;
    archivedChangeCorrespondenceAttachment.fileType = apiArchivedChangeCorrespondenceAttachment.fileType;
    if (apiArchivedChangeCorrespondenceAttachment.correspondence) archivedChangeCorrespondenceAttachment.correspondence = ArchivedChangeCorrespondence.fromApiEntity(apiArchivedChangeCorrespondenceAttachment.correspondence);

    return archivedChangeCorrespondenceAttachment;
  }
}

export default ArchivedChangeCorrespondenceAttachment;

export type ArchivedChangeCorrespondenceAttachmentType = {
  id: number,
  fileName: string;
  fileData: string;
  fileType: string;
  correspondence: ArchivedChangeCorrespondence;
}

