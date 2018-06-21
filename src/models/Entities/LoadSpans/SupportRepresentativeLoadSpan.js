//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import LocationLoadSpan from './LocationLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import UserAvatarImageLoadSpan from './UserAvatarImageLoadSpan';
import AccessCircleLoadSpan from './AccessCircleLoadSpan';

export class SupportRepresentativeLoadSpan {
  firstName: boolean;
  lastName: boolean;
  emailAddress: boolean;
  login: boolean;
  pagerAddress: boolean;
  isAvailableForRouting: boolean;
  isKnowledgeApprover: boolean;
  allowApproverOverride: boolean;
  phone: boolean;
  enableMobileStyles: boolean;
  mobileCustomFieldCount: boolean;
  timeZoneKey: boolean;
  googleCalendarIntegrationEmail: boolean;
  includeRoutingAvailabilityOnDesktopProfileMenu: boolean;
  scheduleAvailabilityEnabled: boolean;
  defaultMobileView: boolean;
  repAvailabilityChangedAction: boolean;
  location: LocationLoadSpan;
  defaultGroup: GroupLoadSpan;
  avatarImage: UserAvatarImageLoadSpan;
  personalContactsList: AccessCircleLoadSpan;

  constructor(){
    this.firstName = false;
    this.lastName = false;
    this.emailAddress = false;
    this.login = false;
    this.pagerAddress = false;
    this.isAvailableForRouting = false;
    this.isKnowledgeApprover = false;
    this.allowApproverOverride = false;
    this.phone = false;
    this.enableMobileStyles = false;
    this.mobileCustomFieldCount = false;
    this.timeZoneKey = false;
    this.googleCalendarIntegrationEmail = false;
    this.includeRoutingAvailabilityOnDesktopProfileMenu = false;
    this.scheduleAvailabilityEnabled = false;
    this.defaultMobileView = false;
    this.repAvailabilityChangedAction = false;
  }

  get locationLoadSpan(): LocationLoadSpan {
    if(!this.location){
		this.location = new LocationLoadSpan();
	}

    return this.location;
  }

  get defaultGroupLoadSpan(): GroupLoadSpan {
    if(!this.defaultGroup){
		this.defaultGroup = new GroupLoadSpan();
	}

    return this.defaultGroup;
  }

  get avatarImageLoadSpan(): UserAvatarImageLoadSpan {
    if(!this.avatarImage){
		this.avatarImage = new UserAvatarImageLoadSpan();
	}

    return this.avatarImage;
  }

  get personalContactsListLoadSpan(): AccessCircleLoadSpan {
    if(!this.personalContactsList){
		this.personalContactsList = new AccessCircleLoadSpan();
	}

    return this.personalContactsList;
  }

  loadAllProperties() {
    this.firstName = true;
    this.lastName = true;
    this.emailAddress = true;
    this.login = true;
    this.pagerAddress = true;
    this.isAvailableForRouting = true;
    this.isKnowledgeApprover = true;
    this.allowApproverOverride = true;
    this.phone = true;
    this.enableMobileStyles = true;
    this.mobileCustomFieldCount = true;
    this.timeZoneKey = true;
    this.googleCalendarIntegrationEmail = true;
    this.includeRoutingAvailabilityOnDesktopProfileMenu = true;
    this.scheduleAvailabilityEnabled = true;
    this.defaultMobileView = true;
    this.repAvailabilityChangedAction = true;
  }
}

export default SupportRepresentativeLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
