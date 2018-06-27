//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CompanyLoadSpan from './CompanyLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import CostCenterLoadSpan from './CostCenterLoadSpan';
import JobFunctionLoadSpan from './JobFunctionLoadSpan';
import UserAvatarImageLoadSpan from './UserAvatarImageLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import EndUserDesktopDefinitionLoadSpan from './EndUserDesktopDefinitionLoadSpan';
import SmsInfoLoadSpan from './SmsInfoLoadSpan';
import TwitterInfoLoadSpan from './TwitterInfoLoadSpan';
import EntityFollowProfileLoadSpan from './EntityFollowProfileLoadSpan';
import CorrespondenceLoadSpan from './CorrespondenceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class CustomerLoadSpan extends LoadSpanBase {
  guid: boolean;
  firstName: boolean;
  lastName: boolean;
  emailAddress: boolean;
  customerID: boolean;
  location: boolean;
  department: boolean;
  phone: boolean;
  fax: boolean;
  cellular: boolean;
  manager: boolean;
  title: boolean;
  comments: boolean;
  pendingDeletion: boolean;
  address1: boolean;
  address2: boolean;
  address3: boolean;
  city: boolean;
  addressState: boolean;
  postalCode: boolean;
  country: boolean;
  login: boolean;
  approvedToAccessEUD: boolean;
  allowedToViewCompanyIncidents: boolean;
  allowedToViewDepartmentIncidents: boolean;
  allowedToViewLocationIncidents: boolean;
  allowedToViewAssociatedGroupsIncidents: boolean;
  allowedToViewOthersToNotifyIncidents: boolean;
  secondaryLogin: boolean;
  allowedToSubmitPurchase: boolean;
  allowedToSelectVendor: boolean;
  allowedToEditRate: boolean;
  canViewServiceCost: boolean;
  canSearchIncidentArchive: boolean;
  timeZoneKey: boolean;
  canAddOTN: boolean;
  excludeFromSearch: boolean;
  followupDate: boolean;
  twitterUsername: boolean;
  createdDate: boolean;
  modifiedDate: boolean;
  isPowerUser: boolean;
  followDiscussionPosts: boolean;
  unsubscribedDate: boolean;
  passwordResetDate: boolean;
  lastLoginDate: boolean;
  source: boolean;
  notificationTypes: boolean;
  unsubscribeStatus: boolean;
  lockoutType: boolean;
  company: CompanyLoadSpan;
  primaryGroup: GroupLoadSpan;
  costCenter: CostCenterLoadSpan;
  jobFunction: JobFunctionLoadSpan;
  avatarImage: UserAvatarImageLoadSpan;
  author: SupportRepresentativeLoadSpan;
  defaultSocialClient: EndUserDesktopDefinitionLoadSpan;
  smsInfo: SmsInfoLoadSpan;
  twitterInfo: TwitterInfoLoadSpan;
  salesRepOwner: SupportRepresentativeLoadSpan;
  modifiedBy: SupportRepresentativeLoadSpan;
  wallPostFollowProfile: EntityFollowProfileLoadSpan;
  discussionFeedFollowProfile: EntityFollowProfileLoadSpan;
  unsubscribedSourceCorrespondence: CorrespondenceLoadSpan;

  constructor(){
    super();
    this.guid = false;
    this.firstName = false;
    this.lastName = false;
    this.emailAddress = false;
    this.customerID = false;
    this.location = false;
    this.department = false;
    this.phone = false;
    this.fax = false;
    this.cellular = false;
    this.manager = false;
    this.title = false;
    this.comments = false;
    this.pendingDeletion = false;
    this.address1 = false;
    this.address2 = false;
    this.address3 = false;
    this.city = false;
    this.addressState = false;
    this.postalCode = false;
    this.country = false;
    this.login = false;
    this.approvedToAccessEUD = false;
    this.allowedToViewCompanyIncidents = false;
    this.allowedToViewDepartmentIncidents = false;
    this.allowedToViewLocationIncidents = false;
    this.allowedToViewAssociatedGroupsIncidents = false;
    this.allowedToViewOthersToNotifyIncidents = false;
    this.secondaryLogin = false;
    this.allowedToSubmitPurchase = false;
    this.allowedToSelectVendor = false;
    this.allowedToEditRate = false;
    this.canViewServiceCost = false;
    this.canSearchIncidentArchive = false;
    this.timeZoneKey = false;
    this.canAddOTN = false;
    this.excludeFromSearch = false;
    this.followupDate = false;
    this.twitterUsername = false;
    this.createdDate = false;
    this.modifiedDate = false;
    this.isPowerUser = false;
    this.followDiscussionPosts = false;
    this.unsubscribedDate = false;
    this.passwordResetDate = false;
    this.lastLoginDate = false;
    this.source = false;
    this.notificationTypes = false;
    this.unsubscribeStatus = false;
    this.lockoutType = false;
  }

  get companyLoadSpan(): CompanyLoadSpan {
    if(!this.company){
		this.company = new CompanyLoadSpan();
	}

    return this.company;
  }

  get primaryGroupLoadSpan(): GroupLoadSpan {
    if(!this.primaryGroup){
		this.primaryGroup = new GroupLoadSpan();
	}

    return this.primaryGroup;
  }

  get costCenterLoadSpan(): CostCenterLoadSpan {
    if(!this.costCenter){
		this.costCenter = new CostCenterLoadSpan();
	}

    return this.costCenter;
  }

  get jobFunctionLoadSpan(): JobFunctionLoadSpan {
    if(!this.jobFunction){
		this.jobFunction = new JobFunctionLoadSpan();
	}

    return this.jobFunction;
  }

  get avatarImageLoadSpan(): UserAvatarImageLoadSpan {
    if(!this.avatarImage){
		this.avatarImage = new UserAvatarImageLoadSpan();
	}

    return this.avatarImage;
  }

  get authorLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.author){
		this.author = new SupportRepresentativeLoadSpan();
	}

    return this.author;
  }

  get defaultSocialClientLoadSpan(): EndUserDesktopDefinitionLoadSpan {
    if(!this.defaultSocialClient){
		this.defaultSocialClient = new EndUserDesktopDefinitionLoadSpan();
	}

    return this.defaultSocialClient;
  }

  get smsInfoLoadSpan(): SmsInfoLoadSpan {
    if(!this.smsInfo){
		this.smsInfo = new SmsInfoLoadSpan();
	}

    return this.smsInfo;
  }

  get twitterInfoLoadSpan(): TwitterInfoLoadSpan {
    if(!this.twitterInfo){
		this.twitterInfo = new TwitterInfoLoadSpan();
	}

    return this.twitterInfo;
  }

  get salesRepOwnerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.salesRepOwner){
		this.salesRepOwner = new SupportRepresentativeLoadSpan();
	}

    return this.salesRepOwner;
  }

  get modifiedByLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.modifiedBy){
		this.modifiedBy = new SupportRepresentativeLoadSpan();
	}

    return this.modifiedBy;
  }

  get wallPostFollowProfileLoadSpan(): EntityFollowProfileLoadSpan {
    if(!this.wallPostFollowProfile){
		this.wallPostFollowProfile = new EntityFollowProfileLoadSpan();
	}

    return this.wallPostFollowProfile;
  }

  get discussionFeedFollowProfileLoadSpan(): EntityFollowProfileLoadSpan {
    if(!this.discussionFeedFollowProfile){
		this.discussionFeedFollowProfile = new EntityFollowProfileLoadSpan();
	}

    return this.discussionFeedFollowProfile;
  }

  get unsubscribedSourceCorrespondenceLoadSpan(): CorrespondenceLoadSpan {
    if(!this.unsubscribedSourceCorrespondence){
		this.unsubscribedSourceCorrespondence = new CorrespondenceLoadSpan();
	}

    return this.unsubscribedSourceCorrespondence;
  }

  loadAllProperties() {
    this.guid = true;
    this.firstName = true;
    this.lastName = true;
    this.emailAddress = true;
    this.customerID = true;
    this.location = true;
    this.department = true;
    this.phone = true;
    this.fax = true;
    this.cellular = true;
    this.manager = true;
    this.title = true;
    this.comments = true;
    this.pendingDeletion = true;
    this.address1 = true;
    this.address2 = true;
    this.address3 = true;
    this.city = true;
    this.addressState = true;
    this.postalCode = true;
    this.country = true;
    this.login = true;
    this.approvedToAccessEUD = true;
    this.allowedToViewCompanyIncidents = true;
    this.allowedToViewDepartmentIncidents = true;
    this.allowedToViewLocationIncidents = true;
    this.allowedToViewAssociatedGroupsIncidents = true;
    this.allowedToViewOthersToNotifyIncidents = true;
    this.secondaryLogin = true;
    this.allowedToSubmitPurchase = true;
    this.allowedToSelectVendor = true;
    this.allowedToEditRate = true;
    this.canViewServiceCost = true;
    this.canSearchIncidentArchive = true;
    this.timeZoneKey = true;
    this.canAddOTN = true;
    this.excludeFromSearch = true;
    this.followupDate = true;
    this.twitterUsername = true;
    this.createdDate = true;
    this.modifiedDate = true;
    this.isPowerUser = true;
    this.followDiscussionPosts = true;
    this.unsubscribedDate = true;
    this.passwordResetDate = true;
    this.lastLoginDate = true;
    this.source = true;
    this.notificationTypes = true;
    this.unsubscribeStatus = true;
    this.lockoutType = true;
  }
}

export default CustomerLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
