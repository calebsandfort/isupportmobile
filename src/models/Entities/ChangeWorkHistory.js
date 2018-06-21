//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Group from './Group';
import WorkHistoryType from './WorkHistoryType';

export class ChangeWorkHistory extends EntityBase {
  createdDate: string;
  entry: string;
  changeNumber: string;
  timeWorked: string;
  startDate: string;
  stopDate: string;
  owner: SupportRepresentative;
  ownerGroup: Group;
  workHistoryType: WorkHistoryType;

  static fromApiEntity(apiChangeWorkHistory:ChangeWorkHistoryType): ChangeWorkHistory {
    let changeWorkHistory = new ChangeWorkHistory();
    changeWorkHistory.id = apiChangeWorkHistory.id;
    changeWorkHistory.createdDate = apiChangeWorkHistory.createdDate;
    changeWorkHistory.entry = apiChangeWorkHistory.entry;
    changeWorkHistory.changeNumber = apiChangeWorkHistory.changeNumber;
    changeWorkHistory.timeWorked = apiChangeWorkHistory.timeWorked;
    changeWorkHistory.startDate = apiChangeWorkHistory.startDate;
    changeWorkHistory.stopDate = apiChangeWorkHistory.stopDate;
    if (apiChangeWorkHistory.owner) changeWorkHistory.owner = SupportRepresentative.fromApiEntity(apiChangeWorkHistory.owner);
    if (apiChangeWorkHistory.ownerGroup) changeWorkHistory.ownerGroup = Group.fromApiEntity(apiChangeWorkHistory.ownerGroup);
    if (apiChangeWorkHistory.workHistoryType) changeWorkHistory.workHistoryType = WorkHistoryType.fromApiEntity(apiChangeWorkHistory.workHistoryType);

    return changeWorkHistory;
  }
}

export default ChangeWorkHistory;

export type ChangeWorkHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  changeNumber: string;
  timeWorked: string;
  startDate: string;
  stopDate: string;
  owner: SupportRepresentative;
  ownerGroup: Group;
  workHistoryType: WorkHistoryType;
}

