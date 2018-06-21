//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import KnowledgeEntryPropertyNames from './KnowledgeEntryPropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';

class KnowledgeEntryLikeEntryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get knowledgeEntry (): KnowledgeEntryPropertyNames {
    return new KnowledgeEntryPropertyNames(super.resolvePropertyName("KnowledgeEntry"));
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
}

export default KnowledgeEntryLikeEntryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
