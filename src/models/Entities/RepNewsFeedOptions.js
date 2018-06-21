//@flow
import EntityBase from './entityBase';
import AccessCircle from './AccessCircle';
import DiscussionFeedIcon from './DiscussionFeedIcon';

export class RepNewsFeedOptions extends EntityBase {
  name: string;
  promotionEnabled: string;
  isPublic: string;
  isDiscussion: string;
  description: string;
  allowRemove: string;
  allowDelete: string;
  allowTransfer: string;
  allowCustomerShare: string;
  allowRepShare: string;
  allowCustomerPoll: string;
  allowRepPoll: string;
  isActive: string;
  showCompany: string;
  showCustomField: string;
  customFieldLabel: string;
  customFieldRequired: string;
  customFieldOptions: string;
  customFieldDefaultValue: string;
  accessCircle: AccessCircle;
  postAccessCircle: AccessCircle;
  replyAccessCircle: AccessCircle;
  icon: DiscussionFeedIcon;

  static fromApiEntity(apiRepNewsFeedOptions:RepNewsFeedOptionsType): RepNewsFeedOptions {
    let repNewsFeedOptions = new RepNewsFeedOptions();
    repNewsFeedOptions.id = apiRepNewsFeedOptions.id;
    repNewsFeedOptions.name = apiRepNewsFeedOptions.name;
    repNewsFeedOptions.promotionEnabled = apiRepNewsFeedOptions.promotionEnabled;
    repNewsFeedOptions.isPublic = apiRepNewsFeedOptions.isPublic;
    repNewsFeedOptions.isDiscussion = apiRepNewsFeedOptions.isDiscussion;
    repNewsFeedOptions.description = apiRepNewsFeedOptions.description;
    repNewsFeedOptions.allowRemove = apiRepNewsFeedOptions.allowRemove;
    repNewsFeedOptions.allowDelete = apiRepNewsFeedOptions.allowDelete;
    repNewsFeedOptions.allowTransfer = apiRepNewsFeedOptions.allowTransfer;
    repNewsFeedOptions.allowCustomerShare = apiRepNewsFeedOptions.allowCustomerShare;
    repNewsFeedOptions.allowRepShare = apiRepNewsFeedOptions.allowRepShare;
    repNewsFeedOptions.allowCustomerPoll = apiRepNewsFeedOptions.allowCustomerPoll;
    repNewsFeedOptions.allowRepPoll = apiRepNewsFeedOptions.allowRepPoll;
    repNewsFeedOptions.isActive = apiRepNewsFeedOptions.isActive;
    repNewsFeedOptions.showCompany = apiRepNewsFeedOptions.showCompany;
    repNewsFeedOptions.showCustomField = apiRepNewsFeedOptions.showCustomField;
    repNewsFeedOptions.customFieldLabel = apiRepNewsFeedOptions.customFieldLabel;
    repNewsFeedOptions.customFieldRequired = apiRepNewsFeedOptions.customFieldRequired;
    repNewsFeedOptions.customFieldOptions = apiRepNewsFeedOptions.customFieldOptions;
    repNewsFeedOptions.customFieldDefaultValue = apiRepNewsFeedOptions.customFieldDefaultValue;
    if (apiRepNewsFeedOptions.accessCircle) repNewsFeedOptions.accessCircle = AccessCircle.fromApiEntity(apiRepNewsFeedOptions.accessCircle);
    if (apiRepNewsFeedOptions.postAccessCircle) repNewsFeedOptions.postAccessCircle = AccessCircle.fromApiEntity(apiRepNewsFeedOptions.postAccessCircle);
    if (apiRepNewsFeedOptions.replyAccessCircle) repNewsFeedOptions.replyAccessCircle = AccessCircle.fromApiEntity(apiRepNewsFeedOptions.replyAccessCircle);
    if (apiRepNewsFeedOptions.icon) repNewsFeedOptions.icon = DiscussionFeedIcon.fromApiEntity(apiRepNewsFeedOptions.icon);

    return repNewsFeedOptions;
  }
}

export default RepNewsFeedOptions;

export type RepNewsFeedOptionsType = {
  id: number,
  name: string;
  promotionEnabled: string;
  isPublic: string;
  isDiscussion: string;
  description: string;
  allowRemove: string;
  allowDelete: string;
  allowTransfer: string;
  allowCustomerShare: string;
  allowRepShare: string;
  allowCustomerPoll: string;
  allowRepPoll: string;
  isActive: string;
  showCompany: string;
  showCustomField: string;
  customFieldLabel: string;
  customFieldRequired: string;
  customFieldOptions: string;
  customFieldDefaultValue: string;
  accessCircle: AccessCircle;
  postAccessCircle: AccessCircle;
  replyAccessCircle: AccessCircle;
  icon: DiscussionFeedIcon;
}

