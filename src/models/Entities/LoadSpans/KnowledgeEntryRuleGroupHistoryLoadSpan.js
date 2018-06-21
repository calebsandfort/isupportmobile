//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import KnowledgeEntryLoadSpan from './KnowledgeEntryLoadSpan';

export class KnowledgeEntryRuleGroupHistoryLoadSpan {
  createdDate: boolean;
  entry: boolean;
  owner: SupportRepresentativeLoadSpan;
  knowledgeEntry: KnowledgeEntryLoadSpan;

  constructor(){
    this.createdDate = false;
    this.entry = false;
  }

  get ownerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.owner){
		this.owner = new SupportRepresentativeLoadSpan();
	}

    return this.owner;
  }

  get knowledgeEntryLoadSpan(): KnowledgeEntryLoadSpan {
    if(!this.knowledgeEntry){
		this.knowledgeEntry = new KnowledgeEntryLoadSpan();
	}

    return this.knowledgeEntry;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
  }
}

export default KnowledgeEntryRuleGroupHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
