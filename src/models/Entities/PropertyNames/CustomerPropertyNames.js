//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CompanyPropertyNames from './CompanyPropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import CostCenterPropertyNames from './CostCenterPropertyNames';
import JobFunctionPropertyNames from './JobFunctionPropertyNames';
import UserAvatarImagePropertyNames from './UserAvatarImagePropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import EndUserDesktopDefinitionPropertyNames from './EndUserDesktopDefinitionPropertyNames';
import SmsInfoPropertyNames from './SmsInfoPropertyNames';
import TwitterInfoPropertyNames from './TwitterInfoPropertyNames';
import EntityFollowProfilePropertyNames from './EntityFollowProfilePropertyNames';
import CorrespondencePropertyNames from './CorrespondencePropertyNames';

class CustomerPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get guid (): string {
    return super.resolvePropertyName("Guid");
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
  get customerID (): string {
    return super.resolvePropertyName("CustomerID");
  }
  get location (): string {
    return super.resolvePropertyName("Location");
  }
  get department (): string {
    return super.resolvePropertyName("Department");
  }
  get phone (): string {
    return super.resolvePropertyName("Phone");
  }
  get fax (): string {
    return super.resolvePropertyName("Fax");
  }
  get cellular (): string {
    return super.resolvePropertyName("Cellular");
  }
  get manager (): string {
    return super.resolvePropertyName("Manager");
  }
  get title (): string {
    return super.resolvePropertyName("Title");
  }
  get comments (): string {
    return super.resolvePropertyName("Comments");
  }
  get pendingDeletion (): string {
    return super.resolvePropertyName("PendingDeletion");
  }
  get address1 (): string {
    return super.resolvePropertyName("Address1");
  }
  get address2 (): string {
    return super.resolvePropertyName("Address2");
  }
  get address3 (): string {
    return super.resolvePropertyName("Address3");
  }
  get city (): string {
    return super.resolvePropertyName("City");
  }
  get addressState (): string {
    return super.resolvePropertyName("AddressState");
  }
  get postalCode (): string {
    return super.resolvePropertyName("PostalCode");
  }
  get country (): string {
    return super.resolvePropertyName("Country");
  }
  get login (): string {
    return super.resolvePropertyName("Login");
  }
  get approvedToAccessEUD (): string {
    return super.resolvePropertyName("ApprovedToAccessEUD");
  }
  get allowedToViewCompanyIncidents (): string {
    return super.resolvePropertyName("AllowedToViewCompanyIncidents");
  }
  get allowedToViewDepartmentIncidents (): string {
    return super.resolvePropertyName("AllowedToViewDepartmentIncidents");
  }
  get allowedToViewLocationIncidents (): string {
    return super.resolvePropertyName("AllowedToViewLocationIncidents");
  }
  get allowedToViewAssociatedGroupsIncidents (): string {
    return super.resolvePropertyName("AllowedToViewAssociatedGroupsIncidents");
  }
  get allowedToViewOthersToNotifyIncidents (): string {
    return super.resolvePropertyName("AllowedToViewOthersToNotifyIncidents");
  }
  get secondaryLogin (): string {
    return super.resolvePropertyName("SecondaryLogin");
  }
  get allowedToSubmitPurchase (): string {
    return super.resolvePropertyName("AllowedToSubmitPurchase");
  }
  get allowedToSelectVendor (): string {
    return super.resolvePropertyName("AllowedToSelectVendor");
  }
  get allowedToEditRate (): string {
    return super.resolvePropertyName("AllowedToEditRate");
  }
  get canViewServiceCost (): string {
    return super.resolvePropertyName("CanViewServiceCost");
  }
  get canSearchIncidentArchive (): string {
    return super.resolvePropertyName("CanSearchIncidentArchive");
  }
  get timeZoneKey (): string {
    return super.resolvePropertyName("TimeZoneKey");
  }
  get canAddOTN (): string {
    return super.resolvePropertyName("CanAddOTN");
  }
  get excludeFromSearch (): string {
    return super.resolvePropertyName("ExcludeFromSearch");
  }
  get followupDate (): string {
    return super.resolvePropertyName("FollowupDate");
  }
  get twitterUsername (): string {
    return super.resolvePropertyName("TwitterUsername");
  }
  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get modifiedDate (): string {
    return super.resolvePropertyName("ModifiedDate");
  }
  get isPowerUser (): string {
    return super.resolvePropertyName("IsPowerUser");
  }
  get followDiscussionPosts (): string {
    return super.resolvePropertyName("FollowDiscussionPosts");
  }
  get unsubscribedDate (): string {
    return super.resolvePropertyName("UnsubscribedDate");
  }
  get passwordResetDate (): string {
    return super.resolvePropertyName("PasswordResetDate");
  }
  get lastLoginDate (): string {
    return super.resolvePropertyName("LastLoginDate");
  }
  get source (): string {
    return super.resolvePropertyName("Source");
  }
  get notificationTypes (): string {
    return super.resolvePropertyName("NotificationTypes");
  }
  get unsubscribeStatus (): string {
    return super.resolvePropertyName("UnsubscribeStatus");
  }
  get lockoutType (): string {
    return super.resolvePropertyName("LockoutType");
  }
  get company (): CompanyPropertyNames {
    return new CompanyPropertyNames(super.resolvePropertyName("Company"));
  }
  get primaryGroup (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("PrimaryGroup"));
  }
  get costCenter (): CostCenterPropertyNames {
    return new CostCenterPropertyNames(super.resolvePropertyName("CostCenter"));
  }
  get jobFunction (): JobFunctionPropertyNames {
    return new JobFunctionPropertyNames(super.resolvePropertyName("JobFunction"));
  }
  get avatarImage (): UserAvatarImagePropertyNames {
    return new UserAvatarImagePropertyNames(super.resolvePropertyName("AvatarImage"));
  }
  get author (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Author"));
  }
  get defaultSocialClient (): EndUserDesktopDefinitionPropertyNames {
    return new EndUserDesktopDefinitionPropertyNames(super.resolvePropertyName("DefaultSocialClient"));
  }
  get smsInfo (): SmsInfoPropertyNames {
    return new SmsInfoPropertyNames(super.resolvePropertyName("SmsInfo"));
  }
  get twitterInfo (): TwitterInfoPropertyNames {
    return new TwitterInfoPropertyNames(super.resolvePropertyName("TwitterInfo"));
  }
  get salesRepOwner (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("SalesRepOwner"));
  }
  get modifiedBy (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("ModifiedBy"));
  }
  get wallPostFollowProfile (): EntityFollowProfilePropertyNames {
    return new EntityFollowProfilePropertyNames(super.resolvePropertyName("WallPostFollowProfile"));
  }
  get discussionFeedFollowProfile (): EntityFollowProfilePropertyNames {
    return new EntityFollowProfilePropertyNames(super.resolvePropertyName("DiscussionFeedFollowProfile"));
  }
  get unsubscribedSourceCorrespondence (): CorrespondencePropertyNames {
    return new CorrespondencePropertyNames(super.resolvePropertyName("UnsubscribedSourceCorrespondence"));
  }
}

export default CustomerPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
