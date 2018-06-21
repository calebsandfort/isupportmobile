//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ProblemAuditHistory extends EntityBase {
  createdDate: string;
  entry: string;
  problemNumber: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiProblemAuditHistory:ProblemAuditHistoryType): ProblemAuditHistory {
    let problemAuditHistory = new ProblemAuditHistory();
    problemAuditHistory.id = apiProblemAuditHistory.id;
    problemAuditHistory.createdDate = apiProblemAuditHistory.createdDate;
    problemAuditHistory.entry = apiProblemAuditHistory.entry;
    problemAuditHistory.problemNumber = apiProblemAuditHistory.problemNumber;
    if (apiProblemAuditHistory.owner) problemAuditHistory.owner = SupportRepresentative.fromApiEntity(apiProblemAuditHistory.owner);

    return problemAuditHistory;
  }
}

export default ProblemAuditHistory;

export type ProblemAuditHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  problemNumber: string;
  owner: SupportRepresentative;
}

