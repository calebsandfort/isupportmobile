//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ChangeRuleGroupHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiChangeRuleGroupHistory:ChangeRuleGroupHistoryType): ChangeRuleGroupHistory {
    let changeRuleGroupHistory = new ChangeRuleGroupHistory();
    changeRuleGroupHistory.id = apiChangeRuleGroupHistory.id;
    changeRuleGroupHistory.createdDate = apiChangeRuleGroupHistory.createdDate;
    changeRuleGroupHistory.entry = apiChangeRuleGroupHistory.entry;
    if (apiChangeRuleGroupHistory.owner) changeRuleGroupHistory.owner = SupportRepresentative.fromApiEntity(apiChangeRuleGroupHistory.owner);

    return changeRuleGroupHistory;
  }
}

export default ChangeRuleGroupHistory;

export type ChangeRuleGroupHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

