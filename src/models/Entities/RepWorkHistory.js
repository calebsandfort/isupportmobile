//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import WorkHistoryType from './WorkHistoryType';

export class RepWorkHistory extends EntityBase {
  createdDate: string;
  entry: string;
  incidentNumber: string;
  timeWorked: string;
  startDate: string;
  stopDate: string;
  owner: SupportRepresentative;
  workHistoryType: WorkHistoryType;

  static fromApiEntity(apiRepWorkHistory:RepWorkHistoryType): RepWorkHistory {
    let repWorkHistory = new RepWorkHistory();
    repWorkHistory.id = apiRepWorkHistory.id;
    repWorkHistory.createdDate = apiRepWorkHistory.createdDate;
    repWorkHistory.entry = apiRepWorkHistory.entry;
    repWorkHistory.incidentNumber = apiRepWorkHistory.incidentNumber;
    repWorkHistory.timeWorked = apiRepWorkHistory.timeWorked;
    repWorkHistory.startDate = apiRepWorkHistory.startDate;
    repWorkHistory.stopDate = apiRepWorkHistory.stopDate;
    if (apiRepWorkHistory.owner) repWorkHistory.owner = SupportRepresentative.fromApiEntity(apiRepWorkHistory.owner);
    if (apiRepWorkHistory.workHistoryType) repWorkHistory.workHistoryType = WorkHistoryType.fromApiEntity(apiRepWorkHistory.workHistoryType);

    return repWorkHistory;
  }
}

export default RepWorkHistory;

export type RepWorkHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  incidentNumber: string;
  timeWorked: string;
  startDate: string;
  stopDate: string;
  owner: SupportRepresentative;
  workHistoryType: WorkHistoryType;
}

