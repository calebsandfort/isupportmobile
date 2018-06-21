//@flow
import EntityBase from './entityBase';

export class KnowledgeDeletionShadow extends EntityBase {
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;

  static fromApiEntity(apiKnowledgeDeletionShadow:KnowledgeDeletionShadowType): KnowledgeDeletionShadow {
    let knowledgeDeletionShadow = new KnowledgeDeletionShadow();
    knowledgeDeletionShadow.id = apiKnowledgeDeletionShadow.id;
    knowledgeDeletionShadow.number = apiKnowledgeDeletionShadow.number;
    knowledgeDeletionShadow.dateDeleted = apiKnowledgeDeletionShadow.dateDeleted;
    knowledgeDeletionShadow.deletedBy = apiKnowledgeDeletionShadow.deletedBy;
    knowledgeDeletionShadow.originalIdentifier = apiKnowledgeDeletionShadow.originalIdentifier;

    return knowledgeDeletionShadow;
  }
}

export default KnowledgeDeletionShadow;

export type KnowledgeDeletionShadowType = {
  id: number,
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
}

