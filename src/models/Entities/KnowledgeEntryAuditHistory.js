//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import KnowledgeEntry from './KnowledgeEntry';

export class KnowledgeEntryAuditHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  knowledgeEntry: KnowledgeEntry;

  static fromApiEntity(apiKnowledgeEntryAuditHistory:KnowledgeEntryAuditHistoryType): KnowledgeEntryAuditHistory {
    let knowledgeEntryAuditHistory = new KnowledgeEntryAuditHistory();
    knowledgeEntryAuditHistory.id = apiKnowledgeEntryAuditHistory.id;
    knowledgeEntryAuditHistory.createdDate = apiKnowledgeEntryAuditHistory.createdDate;
    knowledgeEntryAuditHistory.entry = apiKnowledgeEntryAuditHistory.entry;
    if (apiKnowledgeEntryAuditHistory.owner) knowledgeEntryAuditHistory.owner = SupportRepresentative.fromApiEntity(apiKnowledgeEntryAuditHistory.owner);
    if (apiKnowledgeEntryAuditHistory.knowledgeEntry) knowledgeEntryAuditHistory.knowledgeEntry = KnowledgeEntry.fromApiEntity(apiKnowledgeEntryAuditHistory.knowledgeEntry);

    return knowledgeEntryAuditHistory;
  }
}

export default KnowledgeEntryAuditHistory;

export type KnowledgeEntryAuditHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  knowledgeEntry: KnowledgeEntry;
}

