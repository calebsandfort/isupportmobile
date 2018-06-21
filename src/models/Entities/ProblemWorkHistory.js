//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Group from './Group';
import WorkHistoryType from './WorkHistoryType';

export class ProblemWorkHistory extends EntityBase {
  createdDate: string;
  entry: string;
  problemNumber: string;
  timeWorked: string;
  startDate: string;
  stopDate: string;
  owner: SupportRepresentative;
  ownerGroup: Group;
  workHistoryType: WorkHistoryType;

  static fromApiEntity(apiProblemWorkHistory:ProblemWorkHistoryType): ProblemWorkHistory {
    let problemWorkHistory = new ProblemWorkHistory();
    problemWorkHistory.id = apiProblemWorkHistory.id;
    problemWorkHistory.createdDate = apiProblemWorkHistory.createdDate;
    problemWorkHistory.entry = apiProblemWorkHistory.entry;
    problemWorkHistory.problemNumber = apiProblemWorkHistory.problemNumber;
    problemWorkHistory.timeWorked = apiProblemWorkHistory.timeWorked;
    problemWorkHistory.startDate = apiProblemWorkHistory.startDate;
    problemWorkHistory.stopDate = apiProblemWorkHistory.stopDate;
    if (apiProblemWorkHistory.owner) problemWorkHistory.owner = SupportRepresentative.fromApiEntity(apiProblemWorkHistory.owner);
    if (apiProblemWorkHistory.ownerGroup) problemWorkHistory.ownerGroup = Group.fromApiEntity(apiProblemWorkHistory.ownerGroup);
    if (apiProblemWorkHistory.workHistoryType) problemWorkHistory.workHistoryType = WorkHistoryType.fromApiEntity(apiProblemWorkHistory.workHistoryType);

    return problemWorkHistory;
  }
}

export default ProblemWorkHistory;

export type ProblemWorkHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  problemNumber: string;
  timeWorked: string;
  startDate: string;
  stopDate: string;
  owner: SupportRepresentative;
  ownerGroup: Group;
  workHistoryType: WorkHistoryType;
}

