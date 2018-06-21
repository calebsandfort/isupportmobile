//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ProblemRuleGroupHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiProblemRuleGroupHistory:ProblemRuleGroupHistoryType): ProblemRuleGroupHistory {
    let problemRuleGroupHistory = new ProblemRuleGroupHistory();
    problemRuleGroupHistory.id = apiProblemRuleGroupHistory.id;
    problemRuleGroupHistory.createdDate = apiProblemRuleGroupHistory.createdDate;
    problemRuleGroupHistory.entry = apiProblemRuleGroupHistory.entry;
    if (apiProblemRuleGroupHistory.owner) problemRuleGroupHistory.owner = SupportRepresentative.fromApiEntity(apiProblemRuleGroupHistory.owner);

    return problemRuleGroupHistory;
  }
}

export default ProblemRuleGroupHistory;

export type ProblemRuleGroupHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

