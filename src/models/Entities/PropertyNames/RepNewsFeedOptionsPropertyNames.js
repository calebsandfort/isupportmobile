//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import AccessCirclePropertyNames from './AccessCirclePropertyNames';
import DiscussionFeedIconPropertyNames from './DiscussionFeedIconPropertyNames';

class RepNewsFeedOptionsPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get promotionEnabled (): string {
    return super.resolvePropertyName("PromotionEnabled");
  }
  get isPublic (): string {
    return super.resolvePropertyName("IsPublic");
  }
  get isDiscussion (): string {
    return super.resolvePropertyName("IsDiscussion");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get allowRemove (): string {
    return super.resolvePropertyName("AllowRemove");
  }
  get allowDelete (): string {
    return super.resolvePropertyName("AllowDelete");
  }
  get allowTransfer (): string {
    return super.resolvePropertyName("AllowTransfer");
  }
  get allowCustomerShare (): string {
    return super.resolvePropertyName("AllowCustomerShare");
  }
  get allowRepShare (): string {
    return super.resolvePropertyName("AllowRepShare");
  }
  get allowCustomerPoll (): string {
    return super.resolvePropertyName("AllowCustomerPoll");
  }
  get allowRepPoll (): string {
    return super.resolvePropertyName("AllowRepPoll");
  }
  get isActive (): string {
    return super.resolvePropertyName("IsActive");
  }
  get showCompany (): string {
    return super.resolvePropertyName("ShowCompany");
  }
  get showCustomField (): string {
    return super.resolvePropertyName("ShowCustomField");
  }
  get customFieldLabel (): string {
    return super.resolvePropertyName("CustomFieldLabel");
  }
  get customFieldRequired (): string {
    return super.resolvePropertyName("CustomFieldRequired");
  }
  get customFieldOptions (): string {
    return super.resolvePropertyName("CustomFieldOptions");
  }
  get customFieldDefaultValue (): string {
    return super.resolvePropertyName("CustomFieldDefaultValue");
  }
  get accessCircle (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("AccessCircle"));
  }
  get postAccessCircle (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("PostAccessCircle"));
  }
  get replyAccessCircle (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("ReplyAccessCircle"));
  }
  get icon (): DiscussionFeedIconPropertyNames {
    return new DiscussionFeedIconPropertyNames(super.resolvePropertyName("Icon"));
  }
}

export default RepNewsFeedOptionsPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
