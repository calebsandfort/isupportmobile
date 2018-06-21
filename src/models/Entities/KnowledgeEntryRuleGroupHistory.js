//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import KnowledgeEntry from './KnowledgeEntry';

export class KnowledgeEntryRuleGroupHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  knowledgeEntry: KnowledgeEntry;

  static fromApiEntity(apiKnowledgeEntryRuleGroupHistory:KnowledgeEntryRuleGroupHistoryType): KnowledgeEntryRuleGroupHistory {
    let knowledgeEntryRuleGroupHistory = new KnowledgeEntryRuleGroupHistory();
    knowledgeEntryRuleGroupHistory.id = apiKnowledgeEntryRuleGroupHistory.id;
    knowledgeEntryRuleGroupHistory.createdDate = apiKnowledgeEntryRuleGroupHistory.createdDate;
    knowledgeEntryRuleGroupHistory.entry = apiKnowledgeEntryRuleGroupHistory.entry;
    if (apiKnowledgeEntryRuleGroupHistory.owner) knowledgeEntryRuleGroupHistory.owner = SupportRepresentative.fromApiEntity(apiKnowledgeEntryRuleGroupHistory.owner);
    if (apiKnowledgeEntryRuleGroupHistory.knowledgeEntry) knowledgeEntryRuleGroupHistory.knowledgeEntry = KnowledgeEntry.fromApiEntity(apiKnowledgeEntryRuleGroupHistory.knowledgeEntry);

    return knowledgeEntryRuleGroupHistory;
  }
}

export default KnowledgeEntryRuleGroupHistory;

export type KnowledgeEntryRuleGroupHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  knowledgeEntry: KnowledgeEntry;
}

