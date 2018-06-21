//@flow
import EntityBase from './entityBase';
import KnowledgeEntry from './KnowledgeEntry';
import Customer from './Customer';

export class KnowledgeEntryLikeEntry extends EntityBase {
  knowledgeEntry: KnowledgeEntry;
  customer: Customer;

  static fromApiEntity(apiKnowledgeEntryLikeEntry:KnowledgeEntryLikeEntryType): KnowledgeEntryLikeEntry {
    let knowledgeEntryLikeEntry = new KnowledgeEntryLikeEntry();
    knowledgeEntryLikeEntry.id = apiKnowledgeEntryLikeEntry.id;
    if (apiKnowledgeEntryLikeEntry.knowledgeEntry) knowledgeEntryLikeEntry.knowledgeEntry = KnowledgeEntry.fromApiEntity(apiKnowledgeEntryLikeEntry.knowledgeEntry);
    if (apiKnowledgeEntryLikeEntry.customer) knowledgeEntryLikeEntry.customer = Customer.fromApiEntity(apiKnowledgeEntryLikeEntry.customer);

    return knowledgeEntryLikeEntry;
  }
}

export default KnowledgeEntryLikeEntry;

export type KnowledgeEntryLikeEntryType = {
  id: number,
  knowledgeEntry: KnowledgeEntry;
  customer: Customer;
}

