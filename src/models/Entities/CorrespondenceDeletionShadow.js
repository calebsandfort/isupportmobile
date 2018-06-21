//@flow
import EntityBase from './entityBase';

export class CorrespondenceDeletionShadow extends EntityBase {
  subject: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
  sent: string;
  from: string;
  to: string;

  static fromApiEntity(apiCorrespondenceDeletionShadow:CorrespondenceDeletionShadowType): CorrespondenceDeletionShadow {
    let correspondenceDeletionShadow = new CorrespondenceDeletionShadow();
    correspondenceDeletionShadow.id = apiCorrespondenceDeletionShadow.id;
    correspondenceDeletionShadow.subject = apiCorrespondenceDeletionShadow.subject;
    correspondenceDeletionShadow.dateDeleted = apiCorrespondenceDeletionShadow.dateDeleted;
    correspondenceDeletionShadow.deletedBy = apiCorrespondenceDeletionShadow.deletedBy;
    correspondenceDeletionShadow.originalIdentifier = apiCorrespondenceDeletionShadow.originalIdentifier;
    correspondenceDeletionShadow.sent = apiCorrespondenceDeletionShadow.sent;
    correspondenceDeletionShadow.from = apiCorrespondenceDeletionShadow.from;
    correspondenceDeletionShadow.to = apiCorrespondenceDeletionShadow.to;

    return correspondenceDeletionShadow;
  }
}

export default CorrespondenceDeletionShadow;

export type CorrespondenceDeletionShadowType = {
  id: number,
  subject: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
  sent: string;
  from: string;
  to: string;
}

