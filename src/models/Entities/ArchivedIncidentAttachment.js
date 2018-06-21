//@flow
import EntityBase from './entityBase';
import ArchivedIncident from './ArchivedIncident';

export class ArchivedIncidentAttachment extends EntityBase {
  fileName: string;
  fileData: string;
  fileType: string;
  incident: ArchivedIncident;

  static fromApiEntity(apiArchivedIncidentAttachment:ArchivedIncidentAttachmentType): ArchivedIncidentAttachment {
    let archivedIncidentAttachment = new ArchivedIncidentAttachment();
    archivedIncidentAttachment.id = apiArchivedIncidentAttachment.id;
    archivedIncidentAttachment.fileName = apiArchivedIncidentAttachment.fileName;
    archivedIncidentAttachment.fileData = apiArchivedIncidentAttachment.fileData;
    archivedIncidentAttachment.fileType = apiArchivedIncidentAttachment.fileType;
    if (apiArchivedIncidentAttachment.incident) archivedIncidentAttachment.incident = ArchivedIncident.fromApiEntity(apiArchivedIncidentAttachment.incident);

    return archivedIncidentAttachment;
  }
}

export default ArchivedIncidentAttachment;

export type ArchivedIncidentAttachmentType = {
  id: number,
  fileName: string;
  fileData: string;
  fileType: string;
  incident: ArchivedIncident;
}

