//@flow
import EntityBase from './entityBase';
import Location from './Location';
import Group from './Group';
import UserAvatarImage from './UserAvatarImage';
import AccessCircle from './AccessCircle';
import {DefaultMobileViews} from './Enums';
import {RepAvailabilityChangedActions} from './Enums';

export class SupportRepresentative extends EntityBase {
  firstName: string;
  lastName: string;
  emailAddress: string;
  login: string;
  pagerAddress: string;
  isAvailableForRouting: string;
  isKnowledgeApprover: string;
  allowApproverOverride: string;
  phone: string;
  enableMobileStyles: string;
  mobileCustomFieldCount: string;
  timeZoneKey: string;
  googleCalendarIntegrationEmail: string;
  includeRoutingAvailabilityOnDesktopProfileMenu: string;
  scheduleAvailabilityEnabled: string;
  defaultMobileView: DefaultMobileViews;
  repAvailabilityChangedAction: RepAvailabilityChangedActions;
  location: Location;
  defaultGroup: Group;
  avatarImage: UserAvatarImage;
  personalContactsList: AccessCircle;

  // <editor-fold> Custom Properties
  get displayName (): string {
    return `${this.firstName} ${this.lastName}`;
  }
  // </editor-fold>

  static fromApiEntity(apiSupportRepresentative:SupportRepresentativeType): SupportRepresentative {
    let supportRepresentative = new SupportRepresentative();
    supportRepresentative.id = apiSupportRepresentative.id;
    supportRepresentative.firstName = apiSupportRepresentative.firstName;
    supportRepresentative.lastName = apiSupportRepresentative.lastName;
    supportRepresentative.emailAddress = apiSupportRepresentative.emailAddress;
    supportRepresentative.login = apiSupportRepresentative.login;
    supportRepresentative.pagerAddress = apiSupportRepresentative.pagerAddress;
    supportRepresentative.isAvailableForRouting = apiSupportRepresentative.isAvailableForRouting;
    supportRepresentative.isKnowledgeApprover = apiSupportRepresentative.isKnowledgeApprover;
    supportRepresentative.allowApproverOverride = apiSupportRepresentative.allowApproverOverride;
    supportRepresentative.phone = apiSupportRepresentative.phone;
    supportRepresentative.enableMobileStyles = apiSupportRepresentative.enableMobileStyles;
    supportRepresentative.mobileCustomFieldCount = apiSupportRepresentative.mobileCustomFieldCount;
    supportRepresentative.timeZoneKey = apiSupportRepresentative.timeZoneKey;
    supportRepresentative.googleCalendarIntegrationEmail = apiSupportRepresentative.googleCalendarIntegrationEmail;
    supportRepresentative.includeRoutingAvailabilityOnDesktopProfileMenu = apiSupportRepresentative.includeRoutingAvailabilityOnDesktopProfileMenu;
    supportRepresentative.scheduleAvailabilityEnabled = apiSupportRepresentative.scheduleAvailabilityEnabled;
    supportRepresentative.defaultMobileView = DefaultMobileViews.enumOrdinalOf(parseInt(apiSupportRepresentative.defaultMobileView, 10));
    supportRepresentative.repAvailabilityChangedAction = RepAvailabilityChangedActions.enumOrdinalOf(parseInt(apiSupportRepresentative.repAvailabilityChangedAction, 10));
    if (apiSupportRepresentative.location) supportRepresentative.location = Location.fromApiEntity(apiSupportRepresentative.location);
    if (apiSupportRepresentative.defaultGroup) supportRepresentative.defaultGroup = Group.fromApiEntity(apiSupportRepresentative.defaultGroup);
    if (apiSupportRepresentative.avatarImage) supportRepresentative.avatarImage = UserAvatarImage.fromApiEntity(apiSupportRepresentative.avatarImage);
    if (apiSupportRepresentative.personalContactsList) supportRepresentative.personalContactsList = AccessCircle.fromApiEntity(apiSupportRepresentative.personalContactsList);

    return supportRepresentative;
  }
}

export default SupportRepresentative;

export type SupportRepresentativeType = {
  id: number,
  firstName: string;
  lastName: string;
  emailAddress: string;
  login: string;
  pagerAddress: string;
  isAvailableForRouting: string;
  isKnowledgeApprover: string;
  allowApproverOverride: string;
  phone: string;
  enableMobileStyles: string;
  mobileCustomFieldCount: string;
  timeZoneKey: string;
  googleCalendarIntegrationEmail: string;
  includeRoutingAvailabilityOnDesktopProfileMenu: string;
  scheduleAvailabilityEnabled: string;
  defaultMobileView: DefaultMobileViews;
  repAvailabilityChangedAction: RepAvailabilityChangedActions;
  location: Location;
  defaultGroup: Group;
  avatarImage: UserAvatarImage;
  personalContactsList: AccessCircle;
}
