//@flow
import EntityBase from './entityBase';

export class ChangeDeletionShadow extends EntityBase {
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;

  static fromApiEntity(apiChangeDeletionShadow:ChangeDeletionShadowType): ChangeDeletionShadow {
    let changeDeletionShadow = new ChangeDeletionShadow();
    changeDeletionShadow.id = apiChangeDeletionShadow.id;
    changeDeletionShadow.number = apiChangeDeletionShadow.number;
    changeDeletionShadow.dateDeleted = apiChangeDeletionShadow.dateDeleted;
    changeDeletionShadow.deletedBy = apiChangeDeletionShadow.deletedBy;
    changeDeletionShadow.originalIdentifier = apiChangeDeletionShadow.originalIdentifier;

    return changeDeletionShadow;
  }
}

export default ChangeDeletionShadow;

export type ChangeDeletionShadowType = {
  id: number,
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
}

