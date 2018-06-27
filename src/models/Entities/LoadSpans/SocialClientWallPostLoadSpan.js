//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import KnowledgeEntryLoadSpan from './KnowledgeEntryLoadSpan';
import RepNewsFeedOptionsLoadSpan from './RepNewsFeedOptionsLoadSpan';
import PollLoadSpan from './PollLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class SocialClientWallPostLoadSpan extends LoadSpanBase {
  message: boolean;
  createdDate: boolean;
  removed: boolean;
  likes: boolean;
  dislikes: boolean;
  customerLikeIdentifiersString: boolean;
  customerDislikeIdentifiersString: boolean;
  allowReplies: boolean;
  pinned: boolean;
  pinExpiry: boolean;
  customFieldValue: boolean;
  position: boolean;
  customer: CustomerLoadSpan;
  rep: SupportRepresentativeLoadSpan;
  parentPost: SocialClientWallPostLoadSpan;
  knowledgeEntry: KnowledgeEntryLoadSpan;
  repNewsFeedOptions: RepNewsFeedOptionsLoadSpan;
  poll: PollLoadSpan;

  constructor(){
    super();
    this.message = false;
    this.createdDate = false;
    this.removed = false;
    this.likes = false;
    this.dislikes = false;
    this.customerLikeIdentifiersString = false;
    this.customerDislikeIdentifiersString = false;
    this.allowReplies = false;
    this.pinned = false;
    this.pinExpiry = false;
    this.customFieldValue = false;
    this.position = false;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get repLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.rep){
		this.rep = new SupportRepresentativeLoadSpan();
	}

    return this.rep;
  }

  get parentPostLoadSpan(): SocialClientWallPostLoadSpan {
    if(!this.parentPost){
		this.parentPost = new SocialClientWallPostLoadSpan();
	}

    return this.parentPost;
  }

  get knowledgeEntryLoadSpan(): KnowledgeEntryLoadSpan {
    if(!this.knowledgeEntry){
		this.knowledgeEntry = new KnowledgeEntryLoadSpan();
	}

    return this.knowledgeEntry;
  }

  get repNewsFeedOptionsLoadSpan(): RepNewsFeedOptionsLoadSpan {
    if(!this.repNewsFeedOptions){
		this.repNewsFeedOptions = new RepNewsFeedOptionsLoadSpan();
	}

    return this.repNewsFeedOptions;
  }

  get pollLoadSpan(): PollLoadSpan {
    if(!this.poll){
		this.poll = new PollLoadSpan();
	}

    return this.poll;
  }

  loadAllProperties() {
    this.message = true;
    this.createdDate = true;
    this.removed = true;
    this.likes = true;
    this.dislikes = true;
    this.customerLikeIdentifiersString = true;
    this.customerDislikeIdentifiersString = true;
    this.allowReplies = true;
    this.pinned = true;
    this.pinExpiry = true;
    this.customFieldValue = true;
    this.position = true;
  }
}

export default SocialClientWallPostLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
