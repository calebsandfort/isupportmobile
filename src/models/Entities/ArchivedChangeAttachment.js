//@flow
import EntityBase from './entityBase';
import ArchivedChange from './ArchivedChange';

export class ArchivedChangeAttachment extends EntityBase {
  fileName: string;
  fileData: string;
  fileType: string;
  change: ArchivedChange;

  static fromApiEntity(apiArchivedChangeAttachment:ArchivedChangeAttachmentType): ArchivedChangeAttachment {
    let archivedChangeAttachment = new ArchivedChangeAttachment();
    archivedChangeAttachment.id = apiArchivedChangeAttachment.id;
    archivedChangeAttachment.fileName = apiArchivedChangeAttachment.fileName;
    archivedChangeAttachment.fileData = apiArchivedChangeAttachment.fileData;
    archivedChangeAttachment.fileType = apiArchivedChangeAttachment.fileType;
    if (apiArchivedChangeAttachment.change) archivedChangeAttachment.change = ArchivedChange.fromApiEntity(apiArchivedChangeAttachment.change);

    return archivedChangeAttachment;
  }
}

export default ArchivedChangeAttachment;

export type ArchivedChangeAttachmentType = {
  id: number,
  fileName: string;
  fileData: string;
  fileType: string;
  change: ArchivedChange;
}

