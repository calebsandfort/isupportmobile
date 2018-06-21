//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import LocationPropertyNames from './LocationPropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import UserAvatarImagePropertyNames from './UserAvatarImagePropertyNames';
import AccessCirclePropertyNames from './AccessCirclePropertyNames';

class SupportRepresentativePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get firstName (): string {
    return super.resolvePropertyName("FirstName");
  }
  get lastName (): string {
    return super.resolvePropertyName("LastName");
  }
  get emailAddress (): string {
    return super.resolvePropertyName("EmailAddress");
  }
  get login (): string {
    return super.resolvePropertyName("Login");
  }
  get pagerAddress (): string {
    return super.resolvePropertyName("PagerAddress");
  }
  get isAvailableForRouting (): string {
    return super.resolvePropertyName("IsAvailableForRouting");
  }
  get isKnowledgeApprover (): string {
    return super.resolvePropertyName("IsKnowledgeApprover");
  }
  get allowApproverOverride (): string {
    return super.resolvePropertyName("AllowApproverOverride");
  }
  get phone (): string {
    return super.resolvePropertyName("Phone");
  }
  get enableMobileStyles (): string {
    return super.resolvePropertyName("EnableMobileStyles");
  }
  get mobileCustomFieldCount (): string {
    return super.resolvePropertyName("MobileCustomFieldCount");
  }
  get timeZoneKey (): string {
    return super.resolvePropertyName("TimeZoneKey");
  }
  get googleCalendarIntegrationEmail (): string {
    return super.resolvePropertyName("GoogleCalendarIntegrationEmail");
  }
  get includeRoutingAvailabilityOnDesktopProfileMenu (): string {
    return super.resolvePropertyName("IncludeRoutingAvailabilityOnDesktopProfileMenu");
  }
  get scheduleAvailabilityEnabled (): string {
    return super.resolvePropertyName("ScheduleAvailabilityEnabled");
  }
  get defaultMobileView (): string {
    return super.resolvePropertyName("DefaultMobileView");
  }
  get repAvailabilityChangedAction (): string {
    return super.resolvePropertyName("RepAvailabilityChangedAction");
  }
  get location (): LocationPropertyNames {
    return new LocationPropertyNames(super.resolvePropertyName("Location"));
  }
  get defaultGroup (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("DefaultGroup"));
  }
  get avatarImage (): UserAvatarImagePropertyNames {
    return new UserAvatarImagePropertyNames(super.resolvePropertyName("AvatarImage"));
  }
  get personalContactsList (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("PersonalContactsList"));
  }
}

export default SupportRepresentativePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
