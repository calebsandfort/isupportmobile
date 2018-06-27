//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import AccessCircleLoadSpan from './AccessCircleLoadSpan';
import DiscussionFeedIconLoadSpan from './DiscussionFeedIconLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class RepNewsFeedOptionsLoadSpan extends LoadSpanBase {
  name: boolean;
  promotionEnabled: boolean;
  isPublic: boolean;
  isDiscussion: boolean;
  description: boolean;
  allowRemove: boolean;
  allowDelete: boolean;
  allowTransfer: boolean;
  allowCustomerShare: boolean;
  allowRepShare: boolean;
  allowCustomerPoll: boolean;
  allowRepPoll: boolean;
  isActive: boolean;
  showCompany: boolean;
  showCustomField: boolean;
  customFieldLabel: boolean;
  customFieldRequired: boolean;
  customFieldOptions: boolean;
  customFieldDefaultValue: boolean;
  accessCircle: AccessCircleLoadSpan;
  postAccessCircle: AccessCircleLoadSpan;
  replyAccessCircle: AccessCircleLoadSpan;
  icon: DiscussionFeedIconLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.promotionEnabled = false;
    this.isPublic = false;
    this.isDiscussion = false;
    this.description = false;
    this.allowRemove = false;
    this.allowDelete = false;
    this.allowTransfer = false;
    this.allowCustomerShare = false;
    this.allowRepShare = false;
    this.allowCustomerPoll = false;
    this.allowRepPoll = false;
    this.isActive = false;
    this.showCompany = false;
    this.showCustomField = false;
    this.customFieldLabel = false;
    this.customFieldRequired = false;
    this.customFieldOptions = false;
    this.customFieldDefaultValue = false;
  }

  get accessCircleLoadSpan(): AccessCircleLoadSpan {
    if(!this.accessCircle){
		this.accessCircle = new AccessCircleLoadSpan();
	}

    return this.accessCircle;
  }

  get postAccessCircleLoadSpan(): AccessCircleLoadSpan {
    if(!this.postAccessCircle){
		this.postAccessCircle = new AccessCircleLoadSpan();
	}

    return this.postAccessCircle;
  }

  get replyAccessCircleLoadSpan(): AccessCircleLoadSpan {
    if(!this.replyAccessCircle){
		this.replyAccessCircle = new AccessCircleLoadSpan();
	}

    return this.replyAccessCircle;
  }

  get iconLoadSpan(): DiscussionFeedIconLoadSpan {
    if(!this.icon){
		this.icon = new DiscussionFeedIconLoadSpan();
	}

    return this.icon;
  }

  loadAllProperties() {
    this.name = true;
    this.promotionEnabled = true;
    this.isPublic = true;
    this.isDiscussion = true;
    this.description = true;
    this.allowRemove = true;
    this.allowDelete = true;
    this.allowTransfer = true;
    this.allowCustomerShare = true;
    this.allowRepShare = true;
    this.allowCustomerPoll = true;
    this.allowRepPoll = true;
    this.isActive = true;
    this.showCompany = true;
    this.showCustomField = true;
    this.customFieldLabel = true;
    this.customFieldRequired = true;
    this.customFieldOptions = true;
    this.customFieldDefaultValue = true;
  }
}

export default RepNewsFeedOptionsLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
