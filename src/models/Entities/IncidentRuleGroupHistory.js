//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class IncidentRuleGroupHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiIncidentRuleGroupHistory:IncidentRuleGroupHistoryType): IncidentRuleGroupHistory {
    let incidentRuleGroupHistory = new IncidentRuleGroupHistory();
    incidentRuleGroupHistory.id = apiIncidentRuleGroupHistory.id;
    incidentRuleGroupHistory.createdDate = apiIncidentRuleGroupHistory.createdDate;
    incidentRuleGroupHistory.entry = apiIncidentRuleGroupHistory.entry;
    if (apiIncidentRuleGroupHistory.owner) incidentRuleGroupHistory.owner = SupportRepresentative.fromApiEntity(apiIncidentRuleGroupHistory.owner);

    return incidentRuleGroupHistory;
  }
}

export default IncidentRuleGroupHistory;

export type IncidentRuleGroupHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

