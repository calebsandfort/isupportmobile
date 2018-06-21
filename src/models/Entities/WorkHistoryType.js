//@flow
import EntityBase from './entityBase';

export class WorkHistoryType extends EntityBase {
  name: string;
  position: string;

  static fromApiEntity(apiWorkHistoryType:WorkHistoryTypeType): WorkHistoryType {
    let workHistoryType = new WorkHistoryType();
    workHistoryType.id = apiWorkHistoryType.id;
    workHistoryType.name = apiWorkHistoryType.name;
    workHistoryType.position = apiWorkHistoryType.position;

    return workHistoryType;
  }
}

export default WorkHistoryType;

export type WorkHistoryTypeType = {
  id: number,
  name: string;
  position: string;
}

