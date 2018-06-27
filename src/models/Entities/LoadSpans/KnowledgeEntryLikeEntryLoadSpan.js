//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import KnowledgeEntryLoadSpan from './KnowledgeEntryLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class KnowledgeEntryLikeEntryLoadSpan extends LoadSpanBase {
  knowledgeEntry: KnowledgeEntryLoadSpan;
  customer: CustomerLoadSpan;

  constructor(){
    super();
  }

  get knowledgeEntryLoadSpan(): KnowledgeEntryLoadSpan {
    if(!this.knowledgeEntry){
		this.knowledgeEntry = new KnowledgeEntryLoadSpan();
	}

    return this.knowledgeEntry;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  loadAllProperties() {
  }
}

export default KnowledgeEntryLikeEntryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
