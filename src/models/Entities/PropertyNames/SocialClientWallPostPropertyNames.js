//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import KnowledgeEntryPropertyNames from './KnowledgeEntryPropertyNames';
import RepNewsFeedOptionsPropertyNames from './RepNewsFeedOptionsPropertyNames';
import PollPropertyNames from './PollPropertyNames';

class SocialClientWallPostPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get message (): string {
    return super.resolvePropertyName("Message");
  }
  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get removed (): string {
    return super.resolvePropertyName("Removed");
  }
  get likes (): string {
    return super.resolvePropertyName("Likes");
  }
  get dislikes (): string {
    return super.resolvePropertyName("Dislikes");
  }
  get customerLikeIdentifiersString (): string {
    return super.resolvePropertyName("CustomerLikeIdentifiersString");
  }
  get customerDislikeIdentifiersString (): string {
    return super.resolvePropertyName("CustomerDislikeIdentifiersString");
  }
  get allowReplies (): string {
    return super.resolvePropertyName("AllowReplies");
  }
  get pinned (): string {
    return super.resolvePropertyName("Pinned");
  }
  get pinExpiry (): string {
    return super.resolvePropertyName("PinExpiry");
  }
  get customFieldValue (): string {
    return super.resolvePropertyName("CustomFieldValue");
  }
  get position (): string {
    return super.resolvePropertyName("Position");
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get rep (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Rep"));
  }
  get parentPost (): SocialClientWallPostPropertyNames {
    return new SocialClientWallPostPropertyNames(super.resolvePropertyName("ParentPost"));
  }
  get knowledgeEntry (): KnowledgeEntryPropertyNames {
    return new KnowledgeEntryPropertyNames(super.resolvePropertyName("KnowledgeEntry"));
  }
  get repNewsFeedOptions (): RepNewsFeedOptionsPropertyNames {
    return new RepNewsFeedOptionsPropertyNames(super.resolvePropertyName("RepNewsFeedOptions"));
  }
  get poll (): PollPropertyNames {
    return new PollPropertyNames(super.resolvePropertyName("Poll"));
  }
}

export default SocialClientWallPostPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
