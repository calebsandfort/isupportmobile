//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomIconLoadSpan from './CustomIconLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import IncidentStatusLoadSpan from './IncidentStatusLoadSpan';
import LocationLoadSpan from './LocationLoadSpan';
import UrgencyImpactMappingLoadSpan from './UrgencyImpactMappingLoadSpan';
import PurchaseStatusLoadSpan from './PurchaseStatusLoadSpan';
import ChangeStatusLoadSpan from './ChangeStatusLoadSpan';
import CustomChangeTypeLoadSpan from './CustomChangeTypeLoadSpan';
import SocialClientThemeLoadSpan from './SocialClientThemeLoadSpan';
import IncidentTemplateLoadSpan from './IncidentTemplateLoadSpan';
import SelfHelpGuideItemLoadSpan from './SelfHelpGuideItemLoadSpan';
import FacebookIntegrationInfoLoadSpan from './FacebookIntegrationInfoLoadSpan';
import TwitterIntegrationInfoLoadSpan from './TwitterIntegrationInfoLoadSpan';
import LinkedInIntegrationInfoLoadSpan from './LinkedInIntegrationInfoLoadSpan';
import RepNewsFeedOptionsLoadSpan from './RepNewsFeedOptionsLoadSpan';
import IncidentLayoutLoadSpan from './IncidentLayoutLoadSpan';
import ChangeLayoutLoadSpan from './ChangeLayoutLoadSpan';
import ProblemLayoutLoadSpan from './ProblemLayoutLoadSpan';
import KnowledgeLayoutLoadSpan from './KnowledgeLayoutLoadSpan';
import PurchaseLayoutLoadSpan from './PurchaseLayoutLoadSpan';
import ServiceContractLayoutLoadSpan from './ServiceContractLayoutLoadSpan';
import QueryChartLoadSpan from './QueryChartLoadSpan';
import CustomerLayoutLoadSpan from './CustomerLayoutLoadSpan';
import MySupportFeedLoadSpan from './MySupportFeedLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class SocialClientOptionsLoadSpan extends LoadSpanBase {
  name: boolean;
  customerDisplayRegistrationLink: boolean;
  defaultRegisterTitle: boolean;
  showForgotPasswordLink: boolean;
  defaultForgotPasswordTitle: boolean;
  forgotPasswordEmailExpiration: boolean;
  description: boolean;
  incidentDisplayWorkHistory: boolean;
  incidentAllowEmailToAssignee: boolean;
  changeUpdateEnabled: boolean;
  useMobileFeedLayout: boolean;
  incidentSubmitMessage: boolean;
  incidentSubmitDisplayCustomNumber: boolean;
  changeSubmitDisplayCustomNumber: boolean;
  purchaseSubmitDisplayCustomNumber: boolean;
  incidentLocationOverrideEnabled: boolean;
  incidentDisplayApprovalHistory: boolean;
  incidentDisplayApprovalNotification: boolean;
  problemCreateIncidentEnabled: boolean;
  changeSubmitMessage: boolean;
  changeDisplayApprovalHistory: boolean;
  changeDisplayApprovalAlertBar: boolean;
  changeDisplayAuditHistory: boolean;
  changeDisplayCorrespondenceHistory: boolean;
  changeDisplayCustomerWorkHistory: boolean;
  changeDisplaySlaHistory: boolean;
  changeDisplayRuleGroupHistory: boolean;
  incidentDisplayAuditHistory: boolean;
  incidentDisplaySlaHistory: boolean;
  incidentDisplayRuleGroupHistory: boolean;
  incidentDisplayCorrespondenceHistory: boolean;
  incidentDisplayCustomerChatHistory: boolean;
  incidentUpdateAssignee: boolean;
  incidentUpdateReceiptConfirmation: boolean;
  changeUpdateReceiptConfirmation: boolean;
  changeUpdateAssignee: boolean;
  purchaseDisplayApprovalAlertBar: boolean;
  purchaseRequestorSubmitterEnabled: boolean;
  purchaseSubmitMessage: boolean;
  changeLocationOverrideEnabled: boolean;
  serviceContractDisplayAuditHistory: boolean;
  serviceContractDisplayCorrespondenceHistory: boolean;
  serviceContractUseWithIncident: boolean;
  serviceContractUseWithChange: boolean;
  serviceContractNoContractMessage: boolean;
  serviceContractCourtesyTicketsEnabled: boolean;
  incidentDisplayGenericCustomerAuditHistory: boolean;
  changeDisplayGenericCustomerAuditHistory: boolean;
  bomgarIncidentDisplayNewSessionLink: boolean;
  bomgarIncidentCreateIncidentOnNewSessionStart: boolean;
  bomgarLoginRequiredForNewSession: boolean;
  bomgarDisplayAvailableReps: boolean;
  bomgarChatFlyoutEnabled: boolean;
  bomgarChatFlyoutTitle: boolean;
  bomgarChatFlyoutIcon: boolean;
  bomgarChatFlyoutContent: boolean;
  bomgarChatFlyoutDelay: boolean;
  bomgarMaxActiveEventsCount: boolean;
  homePageDisplayWelcomeMessage: boolean;
  homePageWelcomeMessage: boolean;
  homePageDisplayAssistBar: boolean;
  homePageRightSidePanel1Parameter: boolean;
  homePageRightSidePanel2Parameter: boolean;
  knowledgeEntryPageDisplayCategoryTree: boolean;
  knowledgeEntryPageDisplayCategoryTiles: boolean;
  knowledgeEntryPageWidget1Parameter: boolean;
  knowledgeEntryPageWidget2Parameter: boolean;
  incidentSelectCategoryText: boolean;
  changeSelectCategoryText: boolean;
  knowledgeSelectCategoryText: boolean;
  smsNotificationsEnabled: boolean;
  problemDisplayAuditHistory: boolean;
  problemDisplayCorrespondenceHistory: boolean;
  problemDisplayRuleGroupHistory: boolean;
  knowledgeEntryShowFollowLink: boolean;
  knowledgeEntryShowFollowButton: boolean;
  knowledgeEntryShowLikeButton: boolean;
  chatEnabled: boolean;
  chatAllowUnauthenticated: boolean;
  chatShowLinkOnIncident: boolean;
  chatRequestTimeoutLength: boolean;
  chatTimeoutMessage: boolean;
  chatTimeoutCreateIncidentButtonIncluded: boolean;
  chatShowGroupSelection: boolean;
  chatFlyoutEnabled: boolean;
  chatFlyoutTitle: boolean;
  chatFlyoutIcon: boolean;
  chatFlyoutContent: boolean;
  chatFlyoutDelay: boolean;
  newUsersRequireReview: boolean;
  newUsersRequireReviewMessage: boolean;
  loginBackgroundImage: boolean;
  loginBackgroundImageRepeat: boolean;
  knowledgeEntryShowHistoryContents: boolean;
  goToAssistShowLinkOnIncident: boolean;
  goToAssistClientUrl: boolean;
  goToAssistFlyoutEnabled: boolean;
  goToAssistFlyoutTitle: boolean;
  goToAssistFlyoutIcon: boolean;
  goToAssistFlyoutContent: boolean;
  goToAssistFlyoutDelay: boolean;
  incidentDisplayCategory: boolean;
  changeDisplayCategory: boolean;
  problemDisplayCategory: boolean;
  knowledgeEntryDisplayCategory: boolean;
  incidentEditCategory: boolean;
  changeEditCategory: boolean;
  incidentDisplayTabOrder: boolean;
  changeDisplayTabOrder: boolean;
  problemDisplayTabOrder: boolean;
  purchaseDisplayTabOrder: boolean;
  knowledgeEntryDisplayTabOrder: boolean;
  serviceContractDisplayTabOrder: boolean;
  incidentDisplayFieldOrder: boolean;
  changeDisplayFieldOrder: boolean;
  problemDisplayFieldOrder: boolean;
  purchaseDisplayFieldOrder: boolean;
  knowledgeEntryDisplayFieldOrder: boolean;
  serviceContractDisplayFieldOrder: boolean;
  incidentEditTabOrder: boolean;
  changeEditTabOrder: boolean;
  purchaseEditTabOrder: boolean;
  incidentEditFieldOrder: boolean;
  changeEditFieldOrder: boolean;
  purchaseEditFieldOrder: boolean;
  showCompanyOnRegistration: boolean;
  showPhoneOnRegistration: boolean;
  showCompanyOnIncidentSubmit: boolean;
  requireCompanyOnIncidentSubmit: boolean;
  showLocationOnIncidentSubmit: boolean;
  requireLocationOnIncidentSubmit: boolean;
  showPhoneOnIncidentSubmit: boolean;
  requirePhoneOnIncidentSubmit: boolean;
  showCompanyOnChangeSubmit: boolean;
  requireCompanyOnChangeSubmit: boolean;
  showLocationOnChangeSubmit: boolean;
  requireLocationOnChangeSubmit: boolean;
  showPhoneOnChangeSubmit: boolean;
  requirePhoneOnChangeSubmit: boolean;
  shippingCreateWorkItemIcon: boolean;
  shippingDisplaySelfHelpGuideIcon: boolean;
  shippingCreateDiscussionPostIcon: boolean;
  headerGaugeText: boolean;
  tiledNavigatorMaxColumns: boolean;
  assistBarTextOverride: boolean;
  customersCanAddDashboards: boolean;
  customerShowTimeZonePrompt: boolean;
  availableWidgets: boolean;
  pinNavigatorByDefault: boolean;
  sanitizeHtml: boolean;
  chatRepOtherDisplayName: boolean;
  incidentRouteMethod: boolean;
  incidentDefaultPriority: boolean;
  purchaseHistoryTypesToDisplay: boolean;
  changeRouteMethod: boolean;
  assistBarSearchEntityTypes: boolean;
  homePageMainContentType: boolean;
  homePageRightSidePanel1Type: boolean;
  homePageRightSidePanel2Type: boolean;
  knowledgeEntryPageWidget1Type: boolean;
  knowledgeEntryPageWidget2Type: boolean;
  globalAssistBarCreateEntityTypes: boolean;
  chatButtomPosition: boolean;
  menuType: boolean;
  tiledNavigatorAlignment: boolean;
  incidentSubmitCompanyEntryType: boolean;
  changeSubmitCompanyEntryType: boolean;
  chatRepNameDisplayType: boolean;
  createWorkItemIcon: CustomIconLoadSpan;
  displaySelfHelpGuideIcon: CustomIconLoadSpan;
  createDiscussionPostIcon: CustomIconLoadSpan;
  incidentDefaultOwner: SupportRepresentativeLoadSpan;
  incidentDefaultOwnerGroup: GroupLoadSpan;
  incidentDefaultStatus: IncidentStatusLoadSpan;
  incidentLoadBalancedRouteGroup: GroupLoadSpan;
  incidentLoadBalancedRouteLocation: LocationLoadSpan;
  incidentDefaultUrgencyImpactMapping: UrgencyImpactMappingLoadSpan;
  purchaseDefaultStatus: PurchaseStatusLoadSpan;
  changeDefaultOwner: SupportRepresentativeLoadSpan;
  changeDefaultOwnerGroup: GroupLoadSpan;
  changeDefaultStatus: ChangeStatusLoadSpan;
  changeLoadBalancedRouteGroup: GroupLoadSpan;
  changeLoadBalancedRouteLocation: LocationLoadSpan;
  changeDefaultUrgencyImpactMapping: UrgencyImpactMappingLoadSpan;
  changeDefaultCustomChangeType: CustomChangeTypeLoadSpan;
  theme: SocialClientThemeLoadSpan;
  bomgarIncidentTemplactForNewSessions: IncidentTemplateLoadSpan;
  globalAssistBarSelfHelpGuide: SelfHelpGuideItemLoadSpan;
  facebookIntegrationInfo: FacebookIntegrationInfoLoadSpan;
  twitterIntegrationInfo: TwitterIntegrationInfoLoadSpan;
  linkedInIntegrationInfo: LinkedInIntegrationInfoLoadSpan;
  forgotLoginTemplate: IncidentTemplateLoadSpan;
  knowledgeDiscussionNewsFeed: RepNewsFeedOptionsLoadSpan;
  incidentTemplaceForCustomerRequiresReview: IncidentTemplateLoadSpan;
  viewIncidentLayout: IncidentLayoutLoadSpan;
  submitIncidentLayout: IncidentLayoutLoadSpan;
  viewChangeLayout: ChangeLayoutLoadSpan;
  submitChangeLayout: ChangeLayoutLoadSpan;
  viewProblemLayout: ProblemLayoutLoadSpan;
  viewKnowledgeLayout: KnowledgeLayoutLoadSpan;
  viewPurchaseLayout: PurchaseLayoutLoadSpan;
  submitPurchaseLayout: PurchaseLayoutLoadSpan;
  viewServiceContractLayout: ServiceContractLayoutLoadSpan;
  headerGauge: QueryChartLoadSpan;
  customerProfileLayout: CustomerLayoutLoadSpan;
  incidentFeed: MySupportFeedLoadSpan;
  changeFeed: MySupportFeedLoadSpan;
  problemFeed: MySupportFeedLoadSpan;
  purchaseFeed: MySupportFeedLoadSpan;
  knowledgeEntryFeed: MySupportFeedLoadSpan;
  serviceContractFeed: MySupportFeedLoadSpan;
  headlineFeed: MySupportFeedLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.customerDisplayRegistrationLink = false;
    this.defaultRegisterTitle = false;
    this.showForgotPasswordLink = false;
    this.defaultForgotPasswordTitle = false;
    this.forgotPasswordEmailExpiration = false;
    this.description = false;
    this.incidentDisplayWorkHistory = false;
    this.incidentAllowEmailToAssignee = false;
    this.changeUpdateEnabled = false;
    this.useMobileFeedLayout = false;
    this.incidentSubmitMessage = false;
    this.incidentSubmitDisplayCustomNumber = false;
    this.changeSubmitDisplayCustomNumber = false;
    this.purchaseSubmitDisplayCustomNumber = false;
    this.incidentLocationOverrideEnabled = false;
    this.incidentDisplayApprovalHistory = false;
    this.incidentDisplayApprovalNotification = false;
    this.problemCreateIncidentEnabled = false;
    this.changeSubmitMessage = false;
    this.changeDisplayApprovalHistory = false;
    this.changeDisplayApprovalAlertBar = false;
    this.changeDisplayAuditHistory = false;
    this.changeDisplayCorrespondenceHistory = false;
    this.changeDisplayCustomerWorkHistory = false;
    this.changeDisplaySlaHistory = false;
    this.changeDisplayRuleGroupHistory = false;
    this.incidentDisplayAuditHistory = false;
    this.incidentDisplaySlaHistory = false;
    this.incidentDisplayRuleGroupHistory = false;
    this.incidentDisplayCorrespondenceHistory = false;
    this.incidentDisplayCustomerChatHistory = false;
    this.incidentUpdateAssignee = false;
    this.incidentUpdateReceiptConfirmation = false;
    this.changeUpdateReceiptConfirmation = false;
    this.changeUpdateAssignee = false;
    this.purchaseDisplayApprovalAlertBar = false;
    this.purchaseRequestorSubmitterEnabled = false;
    this.purchaseSubmitMessage = false;
    this.changeLocationOverrideEnabled = false;
    this.serviceContractDisplayAuditHistory = false;
    this.serviceContractDisplayCorrespondenceHistory = false;
    this.serviceContractUseWithIncident = false;
    this.serviceContractUseWithChange = false;
    this.serviceContractNoContractMessage = false;
    this.serviceContractCourtesyTicketsEnabled = false;
    this.incidentDisplayGenericCustomerAuditHistory = false;
    this.changeDisplayGenericCustomerAuditHistory = false;
    this.bomgarIncidentDisplayNewSessionLink = false;
    this.bomgarIncidentCreateIncidentOnNewSessionStart = false;
    this.bomgarLoginRequiredForNewSession = false;
    this.bomgarDisplayAvailableReps = false;
    this.bomgarChatFlyoutEnabled = false;
    this.bomgarChatFlyoutTitle = false;
    this.bomgarChatFlyoutIcon = false;
    this.bomgarChatFlyoutContent = false;
    this.bomgarChatFlyoutDelay = false;
    this.bomgarMaxActiveEventsCount = false;
    this.homePageDisplayWelcomeMessage = false;
    this.homePageWelcomeMessage = false;
    this.homePageDisplayAssistBar = false;
    this.homePageRightSidePanel1Parameter = false;
    this.homePageRightSidePanel2Parameter = false;
    this.knowledgeEntryPageDisplayCategoryTree = false;
    this.knowledgeEntryPageDisplayCategoryTiles = false;
    this.knowledgeEntryPageWidget1Parameter = false;
    this.knowledgeEntryPageWidget2Parameter = false;
    this.incidentSelectCategoryText = false;
    this.changeSelectCategoryText = false;
    this.knowledgeSelectCategoryText = false;
    this.smsNotificationsEnabled = false;
    this.problemDisplayAuditHistory = false;
    this.problemDisplayCorrespondenceHistory = false;
    this.problemDisplayRuleGroupHistory = false;
    this.knowledgeEntryShowFollowLink = false;
    this.knowledgeEntryShowFollowButton = false;
    this.knowledgeEntryShowLikeButton = false;
    this.chatEnabled = false;
    this.chatAllowUnauthenticated = false;
    this.chatShowLinkOnIncident = false;
    this.chatRequestTimeoutLength = false;
    this.chatTimeoutMessage = false;
    this.chatTimeoutCreateIncidentButtonIncluded = false;
    this.chatShowGroupSelection = false;
    this.chatFlyoutEnabled = false;
    this.chatFlyoutTitle = false;
    this.chatFlyoutIcon = false;
    this.chatFlyoutContent = false;
    this.chatFlyoutDelay = false;
    this.newUsersRequireReview = false;
    this.newUsersRequireReviewMessage = false;
    this.loginBackgroundImage = false;
    this.loginBackgroundImageRepeat = false;
    this.knowledgeEntryShowHistoryContents = false;
    this.goToAssistShowLinkOnIncident = false;
    this.goToAssistClientUrl = false;
    this.goToAssistFlyoutEnabled = false;
    this.goToAssistFlyoutTitle = false;
    this.goToAssistFlyoutIcon = false;
    this.goToAssistFlyoutContent = false;
    this.goToAssistFlyoutDelay = false;
    this.incidentDisplayCategory = false;
    this.changeDisplayCategory = false;
    this.problemDisplayCategory = false;
    this.knowledgeEntryDisplayCategory = false;
    this.incidentEditCategory = false;
    this.changeEditCategory = false;
    this.incidentDisplayTabOrder = false;
    this.changeDisplayTabOrder = false;
    this.problemDisplayTabOrder = false;
    this.purchaseDisplayTabOrder = false;
    this.knowledgeEntryDisplayTabOrder = false;
    this.serviceContractDisplayTabOrder = false;
    this.incidentDisplayFieldOrder = false;
    this.changeDisplayFieldOrder = false;
    this.problemDisplayFieldOrder = false;
    this.purchaseDisplayFieldOrder = false;
    this.knowledgeEntryDisplayFieldOrder = false;
    this.serviceContractDisplayFieldOrder = false;
    this.incidentEditTabOrder = false;
    this.changeEditTabOrder = false;
    this.purchaseEditTabOrder = false;
    this.incidentEditFieldOrder = false;
    this.changeEditFieldOrder = false;
    this.purchaseEditFieldOrder = false;
    this.showCompanyOnRegistration = false;
    this.showPhoneOnRegistration = false;
    this.showCompanyOnIncidentSubmit = false;
    this.requireCompanyOnIncidentSubmit = false;
    this.showLocationOnIncidentSubmit = false;
    this.requireLocationOnIncidentSubmit = false;
    this.showPhoneOnIncidentSubmit = false;
    this.requirePhoneOnIncidentSubmit = false;
    this.showCompanyOnChangeSubmit = false;
    this.requireCompanyOnChangeSubmit = false;
    this.showLocationOnChangeSubmit = false;
    this.requireLocationOnChangeSubmit = false;
    this.showPhoneOnChangeSubmit = false;
    this.requirePhoneOnChangeSubmit = false;
    this.shippingCreateWorkItemIcon = false;
    this.shippingDisplaySelfHelpGuideIcon = false;
    this.shippingCreateDiscussionPostIcon = false;
    this.headerGaugeText = false;
    this.tiledNavigatorMaxColumns = false;
    this.assistBarTextOverride = false;
    this.customersCanAddDashboards = false;
    this.customerShowTimeZonePrompt = false;
    this.availableWidgets = false;
    this.pinNavigatorByDefault = false;
    this.sanitizeHtml = false;
    this.chatRepOtherDisplayName = false;
    this.incidentRouteMethod = false;
    this.incidentDefaultPriority = false;
    this.purchaseHistoryTypesToDisplay = false;
    this.changeRouteMethod = false;
    this.assistBarSearchEntityTypes = false;
    this.homePageMainContentType = false;
    this.homePageRightSidePanel1Type = false;
    this.homePageRightSidePanel2Type = false;
    this.knowledgeEntryPageWidget1Type = false;
    this.knowledgeEntryPageWidget2Type = false;
    this.globalAssistBarCreateEntityTypes = false;
    this.chatButtomPosition = false;
    this.menuType = false;
    this.tiledNavigatorAlignment = false;
    this.incidentSubmitCompanyEntryType = false;
    this.changeSubmitCompanyEntryType = false;
    this.chatRepNameDisplayType = false;
  }

  get createWorkItemIconLoadSpan(): CustomIconLoadSpan {
    if(!this.createWorkItemIcon){
		this.createWorkItemIcon = new CustomIconLoadSpan();
	}

    return this.createWorkItemIcon;
  }

  get displaySelfHelpGuideIconLoadSpan(): CustomIconLoadSpan {
    if(!this.displaySelfHelpGuideIcon){
		this.displaySelfHelpGuideIcon = new CustomIconLoadSpan();
	}

    return this.displaySelfHelpGuideIcon;
  }

  get createDiscussionPostIconLoadSpan(): CustomIconLoadSpan {
    if(!this.createDiscussionPostIcon){
		this.createDiscussionPostIcon = new CustomIconLoadSpan();
	}

    return this.createDiscussionPostIcon;
  }

  get incidentDefaultOwnerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.incidentDefaultOwner){
		this.incidentDefaultOwner = new SupportRepresentativeLoadSpan();
	}

    return this.incidentDefaultOwner;
  }

  get incidentDefaultOwnerGroupLoadSpan(): GroupLoadSpan {
    if(!this.incidentDefaultOwnerGroup){
		this.incidentDefaultOwnerGroup = new GroupLoadSpan();
	}

    return this.incidentDefaultOwnerGroup;
  }

  get incidentDefaultStatusLoadSpan(): IncidentStatusLoadSpan {
    if(!this.incidentDefaultStatus){
		this.incidentDefaultStatus = new IncidentStatusLoadSpan();
	}

    return this.incidentDefaultStatus;
  }

  get incidentLoadBalancedRouteGroupLoadSpan(): GroupLoadSpan {
    if(!this.incidentLoadBalancedRouteGroup){
		this.incidentLoadBalancedRouteGroup = new GroupLoadSpan();
	}

    return this.incidentLoadBalancedRouteGroup;
  }

  get incidentLoadBalancedRouteLocationLoadSpan(): LocationLoadSpan {
    if(!this.incidentLoadBalancedRouteLocation){
		this.incidentLoadBalancedRouteLocation = new LocationLoadSpan();
	}

    return this.incidentLoadBalancedRouteLocation;
  }

  get incidentDefaultUrgencyImpactMappingLoadSpan(): UrgencyImpactMappingLoadSpan {
    if(!this.incidentDefaultUrgencyImpactMapping){
		this.incidentDefaultUrgencyImpactMapping = new UrgencyImpactMappingLoadSpan();
	}

    return this.incidentDefaultUrgencyImpactMapping;
  }

  get purchaseDefaultStatusLoadSpan(): PurchaseStatusLoadSpan {
    if(!this.purchaseDefaultStatus){
		this.purchaseDefaultStatus = new PurchaseStatusLoadSpan();
	}

    return this.purchaseDefaultStatus;
  }

  get changeDefaultOwnerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.changeDefaultOwner){
		this.changeDefaultOwner = new SupportRepresentativeLoadSpan();
	}

    return this.changeDefaultOwner;
  }

  get changeDefaultOwnerGroupLoadSpan(): GroupLoadSpan {
    if(!this.changeDefaultOwnerGroup){
		this.changeDefaultOwnerGroup = new GroupLoadSpan();
	}

    return this.changeDefaultOwnerGroup;
  }

  get changeDefaultStatusLoadSpan(): ChangeStatusLoadSpan {
    if(!this.changeDefaultStatus){
		this.changeDefaultStatus = new ChangeStatusLoadSpan();
	}

    return this.changeDefaultStatus;
  }

  get changeLoadBalancedRouteGroupLoadSpan(): GroupLoadSpan {
    if(!this.changeLoadBalancedRouteGroup){
		this.changeLoadBalancedRouteGroup = new GroupLoadSpan();
	}

    return this.changeLoadBalancedRouteGroup;
  }

  get changeLoadBalancedRouteLocationLoadSpan(): LocationLoadSpan {
    if(!this.changeLoadBalancedRouteLocation){
		this.changeLoadBalancedRouteLocation = new LocationLoadSpan();
	}

    return this.changeLoadBalancedRouteLocation;
  }

  get changeDefaultUrgencyImpactMappingLoadSpan(): UrgencyImpactMappingLoadSpan {
    if(!this.changeDefaultUrgencyImpactMapping){
		this.changeDefaultUrgencyImpactMapping = new UrgencyImpactMappingLoadSpan();
	}

    return this.changeDefaultUrgencyImpactMapping;
  }

  get changeDefaultCustomChangeTypeLoadSpan(): CustomChangeTypeLoadSpan {
    if(!this.changeDefaultCustomChangeType){
		this.changeDefaultCustomChangeType = new CustomChangeTypeLoadSpan();
	}

    return this.changeDefaultCustomChangeType;
  }

  get themeLoadSpan(): SocialClientThemeLoadSpan {
    if(!this.theme){
		this.theme = new SocialClientThemeLoadSpan();
	}

    return this.theme;
  }

  get bomgarIncidentTemplactForNewSessionsLoadSpan(): IncidentTemplateLoadSpan {
    if(!this.bomgarIncidentTemplactForNewSessions){
		this.bomgarIncidentTemplactForNewSessions = new IncidentTemplateLoadSpan();
	}

    return this.bomgarIncidentTemplactForNewSessions;
  }

  get globalAssistBarSelfHelpGuideLoadSpan(): SelfHelpGuideItemLoadSpan {
    if(!this.globalAssistBarSelfHelpGuide){
		this.globalAssistBarSelfHelpGuide = new SelfHelpGuideItemLoadSpan();
	}

    return this.globalAssistBarSelfHelpGuide;
  }

  get facebookIntegrationInfoLoadSpan(): FacebookIntegrationInfoLoadSpan {
    if(!this.facebookIntegrationInfo){
		this.facebookIntegrationInfo = new FacebookIntegrationInfoLoadSpan();
	}

    return this.facebookIntegrationInfo;
  }

  get twitterIntegrationInfoLoadSpan(): TwitterIntegrationInfoLoadSpan {
    if(!this.twitterIntegrationInfo){
		this.twitterIntegrationInfo = new TwitterIntegrationInfoLoadSpan();
	}

    return this.twitterIntegrationInfo;
  }

  get linkedInIntegrationInfoLoadSpan(): LinkedInIntegrationInfoLoadSpan {
    if(!this.linkedInIntegrationInfo){
		this.linkedInIntegrationInfo = new LinkedInIntegrationInfoLoadSpan();
	}

    return this.linkedInIntegrationInfo;
  }

  get forgotLoginTemplateLoadSpan(): IncidentTemplateLoadSpan {
    if(!this.forgotLoginTemplate){
		this.forgotLoginTemplate = new IncidentTemplateLoadSpan();
	}

    return this.forgotLoginTemplate;
  }

  get knowledgeDiscussionNewsFeedLoadSpan(): RepNewsFeedOptionsLoadSpan {
    if(!this.knowledgeDiscussionNewsFeed){
		this.knowledgeDiscussionNewsFeed = new RepNewsFeedOptionsLoadSpan();
	}

    return this.knowledgeDiscussionNewsFeed;
  }

  get incidentTemplaceForCustomerRequiresReviewLoadSpan(): IncidentTemplateLoadSpan {
    if(!this.incidentTemplaceForCustomerRequiresReview){
		this.incidentTemplaceForCustomerRequiresReview = new IncidentTemplateLoadSpan();
	}

    return this.incidentTemplaceForCustomerRequiresReview;
  }

  get viewIncidentLayoutLoadSpan(): IncidentLayoutLoadSpan {
    if(!this.viewIncidentLayout){
		this.viewIncidentLayout = new IncidentLayoutLoadSpan();
	}

    return this.viewIncidentLayout;
  }

  get submitIncidentLayoutLoadSpan(): IncidentLayoutLoadSpan {
    if(!this.submitIncidentLayout){
		this.submitIncidentLayout = new IncidentLayoutLoadSpan();
	}

    return this.submitIncidentLayout;
  }

  get viewChangeLayoutLoadSpan(): ChangeLayoutLoadSpan {
    if(!this.viewChangeLayout){
		this.viewChangeLayout = new ChangeLayoutLoadSpan();
	}

    return this.viewChangeLayout;
  }

  get submitChangeLayoutLoadSpan(): ChangeLayoutLoadSpan {
    if(!this.submitChangeLayout){
		this.submitChangeLayout = new ChangeLayoutLoadSpan();
	}

    return this.submitChangeLayout;
  }

  get viewProblemLayoutLoadSpan(): ProblemLayoutLoadSpan {
    if(!this.viewProblemLayout){
		this.viewProblemLayout = new ProblemLayoutLoadSpan();
	}

    return this.viewProblemLayout;
  }

  get viewKnowledgeLayoutLoadSpan(): KnowledgeLayoutLoadSpan {
    if(!this.viewKnowledgeLayout){
		this.viewKnowledgeLayout = new KnowledgeLayoutLoadSpan();
	}

    return this.viewKnowledgeLayout;
  }

  get viewPurchaseLayoutLoadSpan(): PurchaseLayoutLoadSpan {
    if(!this.viewPurchaseLayout){
		this.viewPurchaseLayout = new PurchaseLayoutLoadSpan();
	}

    return this.viewPurchaseLayout;
  }

  get submitPurchaseLayoutLoadSpan(): PurchaseLayoutLoadSpan {
    if(!this.submitPurchaseLayout){
		this.submitPurchaseLayout = new PurchaseLayoutLoadSpan();
	}

    return this.submitPurchaseLayout;
  }

  get viewServiceContractLayoutLoadSpan(): ServiceContractLayoutLoadSpan {
    if(!this.viewServiceContractLayout){
		this.viewServiceContractLayout = new ServiceContractLayoutLoadSpan();
	}

    return this.viewServiceContractLayout;
  }

  get headerGaugeLoadSpan(): QueryChartLoadSpan {
    if(!this.headerGauge){
		this.headerGauge = new QueryChartLoadSpan();
	}

    return this.headerGauge;
  }

  get customerProfileLayoutLoadSpan(): CustomerLayoutLoadSpan {
    if(!this.customerProfileLayout){
		this.customerProfileLayout = new CustomerLayoutLoadSpan();
	}

    return this.customerProfileLayout;
  }

  get incidentFeedLoadSpan(): MySupportFeedLoadSpan {
    if(!this.incidentFeed){
		this.incidentFeed = new MySupportFeedLoadSpan();
	}

    return this.incidentFeed;
  }

  get changeFeedLoadSpan(): MySupportFeedLoadSpan {
    if(!this.changeFeed){
		this.changeFeed = new MySupportFeedLoadSpan();
	}

    return this.changeFeed;
  }

  get problemFeedLoadSpan(): MySupportFeedLoadSpan {
    if(!this.problemFeed){
		this.problemFeed = new MySupportFeedLoadSpan();
	}

    return this.problemFeed;
  }

  get purchaseFeedLoadSpan(): MySupportFeedLoadSpan {
    if(!this.purchaseFeed){
		this.purchaseFeed = new MySupportFeedLoadSpan();
	}

    return this.purchaseFeed;
  }

  get knowledgeEntryFeedLoadSpan(): MySupportFeedLoadSpan {
    if(!this.knowledgeEntryFeed){
		this.knowledgeEntryFeed = new MySupportFeedLoadSpan();
	}

    return this.knowledgeEntryFeed;
  }

  get serviceContractFeedLoadSpan(): MySupportFeedLoadSpan {
    if(!this.serviceContractFeed){
		this.serviceContractFeed = new MySupportFeedLoadSpan();
	}

    return this.serviceContractFeed;
  }

  get headlineFeedLoadSpan(): MySupportFeedLoadSpan {
    if(!this.headlineFeed){
		this.headlineFeed = new MySupportFeedLoadSpan();
	}

    return this.headlineFeed;
  }

  loadAllProperties() {
    this.name = true;
    this.customerDisplayRegistrationLink = true;
    this.defaultRegisterTitle = true;
    this.showForgotPasswordLink = true;
    this.defaultForgotPasswordTitle = true;
    this.forgotPasswordEmailExpiration = true;
    this.description = true;
    this.incidentDisplayWorkHistory = true;
    this.incidentAllowEmailToAssignee = true;
    this.changeUpdateEnabled = true;
    this.useMobileFeedLayout = true;
    this.incidentSubmitMessage = true;
    this.incidentSubmitDisplayCustomNumber = true;
    this.changeSubmitDisplayCustomNumber = true;
    this.purchaseSubmitDisplayCustomNumber = true;
    this.incidentLocationOverrideEnabled = true;
    this.incidentDisplayApprovalHistory = true;
    this.incidentDisplayApprovalNotification = true;
    this.problemCreateIncidentEnabled = true;
    this.changeSubmitMessage = true;
    this.changeDisplayApprovalHistory = true;
    this.changeDisplayApprovalAlertBar = true;
    this.changeDisplayAuditHistory = true;
    this.changeDisplayCorrespondenceHistory = true;
    this.changeDisplayCustomerWorkHistory = true;
    this.changeDisplaySlaHistory = true;
    this.changeDisplayRuleGroupHistory = true;
    this.incidentDisplayAuditHistory = true;
    this.incidentDisplaySlaHistory = true;
    this.incidentDisplayRuleGroupHistory = true;
    this.incidentDisplayCorrespondenceHistory = true;
    this.incidentDisplayCustomerChatHistory = true;
    this.incidentUpdateAssignee = true;
    this.incidentUpdateReceiptConfirmation = true;
    this.changeUpdateReceiptConfirmation = true;
    this.changeUpdateAssignee = true;
    this.purchaseDisplayApprovalAlertBar = true;
    this.purchaseRequestorSubmitterEnabled = true;
    this.purchaseSubmitMessage = true;
    this.changeLocationOverrideEnabled = true;
    this.serviceContractDisplayAuditHistory = true;
    this.serviceContractDisplayCorrespondenceHistory = true;
    this.serviceContractUseWithIncident = true;
    this.serviceContractUseWithChange = true;
    this.serviceContractNoContractMessage = true;
    this.serviceContractCourtesyTicketsEnabled = true;
    this.incidentDisplayGenericCustomerAuditHistory = true;
    this.changeDisplayGenericCustomerAuditHistory = true;
    this.bomgarIncidentDisplayNewSessionLink = true;
    this.bomgarIncidentCreateIncidentOnNewSessionStart = true;
    this.bomgarLoginRequiredForNewSession = true;
    this.bomgarDisplayAvailableReps = true;
    this.bomgarChatFlyoutEnabled = true;
    this.bomgarChatFlyoutTitle = true;
    this.bomgarChatFlyoutIcon = true;
    this.bomgarChatFlyoutContent = true;
    this.bomgarChatFlyoutDelay = true;
    this.bomgarMaxActiveEventsCount = true;
    this.homePageDisplayWelcomeMessage = true;
    this.homePageWelcomeMessage = true;
    this.homePageDisplayAssistBar = true;
    this.homePageRightSidePanel1Parameter = true;
    this.homePageRightSidePanel2Parameter = true;
    this.knowledgeEntryPageDisplayCategoryTree = true;
    this.knowledgeEntryPageDisplayCategoryTiles = true;
    this.knowledgeEntryPageWidget1Parameter = true;
    this.knowledgeEntryPageWidget2Parameter = true;
    this.incidentSelectCategoryText = true;
    this.changeSelectCategoryText = true;
    this.knowledgeSelectCategoryText = true;
    this.smsNotificationsEnabled = true;
    this.problemDisplayAuditHistory = true;
    this.problemDisplayCorrespondenceHistory = true;
    this.problemDisplayRuleGroupHistory = true;
    this.knowledgeEntryShowFollowLink = true;
    this.knowledgeEntryShowFollowButton = true;
    this.knowledgeEntryShowLikeButton = true;
    this.chatEnabled = true;
    this.chatAllowUnauthenticated = true;
    this.chatShowLinkOnIncident = true;
    this.chatRequestTimeoutLength = true;
    this.chatTimeoutMessage = true;
    this.chatTimeoutCreateIncidentButtonIncluded = true;
    this.chatShowGroupSelection = true;
    this.chatFlyoutEnabled = true;
    this.chatFlyoutTitle = true;
    this.chatFlyoutIcon = true;
    this.chatFlyoutContent = true;
    this.chatFlyoutDelay = true;
    this.newUsersRequireReview = true;
    this.newUsersRequireReviewMessage = true;
    this.loginBackgroundImage = true;
    this.loginBackgroundImageRepeat = true;
    this.knowledgeEntryShowHistoryContents = true;
    this.goToAssistShowLinkOnIncident = true;
    this.goToAssistClientUrl = true;
    this.goToAssistFlyoutEnabled = true;
    this.goToAssistFlyoutTitle = true;
    this.goToAssistFlyoutIcon = true;
    this.goToAssistFlyoutContent = true;
    this.goToAssistFlyoutDelay = true;
    this.incidentDisplayCategory = true;
    this.changeDisplayCategory = true;
    this.problemDisplayCategory = true;
    this.knowledgeEntryDisplayCategory = true;
    this.incidentEditCategory = true;
    this.changeEditCategory = true;
    this.incidentDisplayTabOrder = true;
    this.changeDisplayTabOrder = true;
    this.problemDisplayTabOrder = true;
    this.purchaseDisplayTabOrder = true;
    this.knowledgeEntryDisplayTabOrder = true;
    this.serviceContractDisplayTabOrder = true;
    this.incidentDisplayFieldOrder = true;
    this.changeDisplayFieldOrder = true;
    this.problemDisplayFieldOrder = true;
    this.purchaseDisplayFieldOrder = true;
    this.knowledgeEntryDisplayFieldOrder = true;
    this.serviceContractDisplayFieldOrder = true;
    this.incidentEditTabOrder = true;
    this.changeEditTabOrder = true;
    this.purchaseEditTabOrder = true;
    this.incidentEditFieldOrder = true;
    this.changeEditFieldOrder = true;
    this.purchaseEditFieldOrder = true;
    this.showCompanyOnRegistration = true;
    this.showPhoneOnRegistration = true;
    this.showCompanyOnIncidentSubmit = true;
    this.requireCompanyOnIncidentSubmit = true;
    this.showLocationOnIncidentSubmit = true;
    this.requireLocationOnIncidentSubmit = true;
    this.showPhoneOnIncidentSubmit = true;
    this.requirePhoneOnIncidentSubmit = true;
    this.showCompanyOnChangeSubmit = true;
    this.requireCompanyOnChangeSubmit = true;
    this.showLocationOnChangeSubmit = true;
    this.requireLocationOnChangeSubmit = true;
    this.showPhoneOnChangeSubmit = true;
    this.requirePhoneOnChangeSubmit = true;
    this.shippingCreateWorkItemIcon = true;
    this.shippingDisplaySelfHelpGuideIcon = true;
    this.shippingCreateDiscussionPostIcon = true;
    this.headerGaugeText = true;
    this.tiledNavigatorMaxColumns = true;
    this.assistBarTextOverride = true;
    this.customersCanAddDashboards = true;
    this.customerShowTimeZonePrompt = true;
    this.availableWidgets = true;
    this.pinNavigatorByDefault = true;
    this.sanitizeHtml = true;
    this.chatRepOtherDisplayName = true;
    this.incidentRouteMethod = true;
    this.incidentDefaultPriority = true;
    this.purchaseHistoryTypesToDisplay = true;
    this.changeRouteMethod = true;
    this.assistBarSearchEntityTypes = true;
    this.homePageMainContentType = true;
    this.homePageRightSidePanel1Type = true;
    this.homePageRightSidePanel2Type = true;
    this.knowledgeEntryPageWidget1Type = true;
    this.knowledgeEntryPageWidget2Type = true;
    this.globalAssistBarCreateEntityTypes = true;
    this.chatButtomPosition = true;
    this.menuType = true;
    this.tiledNavigatorAlignment = true;
    this.incidentSubmitCompanyEntryType = true;
    this.changeSubmitCompanyEntryType = true;
    this.chatRepNameDisplayType = true;
  }
}

export default SocialClientOptionsLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
