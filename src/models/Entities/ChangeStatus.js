//@flow
import EntityBase from './entityBase';
import {ChangeStatusTypes} from './Enums';

export class ChangeStatus extends EntityBase {
  label: string;
  position: string;
  eudLabel: string;
  type: ChangeStatusTypes;

  static fromApiEntity(apiChangeStatus:ChangeStatusType): ChangeStatus {
    let changeStatus = new ChangeStatus();
    changeStatus.id = apiChangeStatus.id;
    changeStatus.label = apiChangeStatus.label;
    changeStatus.position = apiChangeStatus.position;
    changeStatus.eudLabel = apiChangeStatus.eudLabel;
    changeStatus.type = ChangeStatusTypes.enumOrdinalOf(parseInt(apiChangeStatus.type, 10));

    return changeStatus;
  }
}

export default ChangeStatus;

export type ChangeStatusType = {
  id: number,
  label: string;
  position: string;
  eudLabel: string;
  type: ChangeStatusTypes;
}

