//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SocialClientOptionsLoadSpan from './SocialClientOptionsLoadSpan';
import IncidentTemplateLoadSpan from './IncidentTemplateLoadSpan';
import MySupportFeedLoadSpan from './MySupportFeedLoadSpan';

export class EndUserDesktopDefinitionLoadSpan {
  name: boolean;
  url: boolean;
  defaultAuthenticationTitle: boolean;
  groupPermissionsEnabled: boolean;
  socialClientOptionsOrderOfPrecedence: boolean;
  isDefault: boolean;
  externalChatEnabled: boolean;
  externalChatButtonVerticalOffset: boolean;
  externalChatButtonHorizontalOffset: boolean;
  externalChatButtonDelay: boolean;
  externalChatApprovedSites: boolean;
  externalChatToastGreetingEnabled: boolean;
  externalChatToastGreeting: boolean;
  externalChatToastGreetingDelay: boolean;
  externalChatToastGreetingDeactivateAfter: boolean;
  externalChatAllowAnonymous: boolean;
  externalChatUseDefaultColors: boolean;
  externalChatPrimaryColor: boolean;
  externalChatSecondaryColor: boolean;
  externalChatRepOtherDisplayName: boolean;
  externalChatButtonPosition: boolean;
  authenticationMethod: boolean;
  externalChatPrimaryFontColor: boolean;
  externalChatSecondaryFontColor: boolean;
  externalChatRepNameDisplayType: boolean;
  defaultSocialClientOptions: SocialClientOptionsLoadSpan;
  defaultMobileSocialClientOptions: SocialClientOptionsLoadSpan;
  easySubmitTemplate: IncidentTemplateLoadSpan;
  knowledgeEntryFeed: MySupportFeedLoadSpan;

  constructor(){
    this.name = false;
    this.url = false;
    this.defaultAuthenticationTitle = false;
    this.groupPermissionsEnabled = false;
    this.socialClientOptionsOrderOfPrecedence = false;
    this.isDefault = false;
    this.externalChatEnabled = false;
    this.externalChatButtonVerticalOffset = false;
    this.externalChatButtonHorizontalOffset = false;
    this.externalChatButtonDelay = false;
    this.externalChatApprovedSites = false;
    this.externalChatToastGreetingEnabled = false;
    this.externalChatToastGreeting = false;
    this.externalChatToastGreetingDelay = false;
    this.externalChatToastGreetingDeactivateAfter = false;
    this.externalChatAllowAnonymous = false;
    this.externalChatUseDefaultColors = false;
    this.externalChatPrimaryColor = false;
    this.externalChatSecondaryColor = false;
    this.externalChatRepOtherDisplayName = false;
    this.externalChatButtonPosition = false;
    this.authenticationMethod = false;
    this.externalChatPrimaryFontColor = false;
    this.externalChatSecondaryFontColor = false;
    this.externalChatRepNameDisplayType = false;
  }

  get defaultSocialClientOptionsLoadSpan(): SocialClientOptionsLoadSpan {
    if(!this.defaultSocialClientOptions){
		this.defaultSocialClientOptions = new SocialClientOptionsLoadSpan();
	}

    return this.defaultSocialClientOptions;
  }

  get defaultMobileSocialClientOptionsLoadSpan(): SocialClientOptionsLoadSpan {
    if(!this.defaultMobileSocialClientOptions){
		this.defaultMobileSocialClientOptions = new SocialClientOptionsLoadSpan();
	}

    return this.defaultMobileSocialClientOptions;
  }

  get easySubmitTemplateLoadSpan(): IncidentTemplateLoadSpan {
    if(!this.easySubmitTemplate){
		this.easySubmitTemplate = new IncidentTemplateLoadSpan();
	}

    return this.easySubmitTemplate;
  }

  get knowledgeEntryFeedLoadSpan(): MySupportFeedLoadSpan {
    if(!this.knowledgeEntryFeed){
		this.knowledgeEntryFeed = new MySupportFeedLoadSpan();
	}

    return this.knowledgeEntryFeed;
  }

  loadAllProperties() {
    this.name = true;
    this.url = true;
    this.defaultAuthenticationTitle = true;
    this.groupPermissionsEnabled = true;
    this.socialClientOptionsOrderOfPrecedence = true;
    this.isDefault = true;
    this.externalChatEnabled = true;
    this.externalChatButtonVerticalOffset = true;
    this.externalChatButtonHorizontalOffset = true;
    this.externalChatButtonDelay = true;
    this.externalChatApprovedSites = true;
    this.externalChatToastGreetingEnabled = true;
    this.externalChatToastGreeting = true;
    this.externalChatToastGreetingDelay = true;
    this.externalChatToastGreetingDeactivateAfter = true;
    this.externalChatAllowAnonymous = true;
    this.externalChatUseDefaultColors = true;
    this.externalChatPrimaryColor = true;
    this.externalChatSecondaryColor = true;
    this.externalChatRepOtherDisplayName = true;
    this.externalChatButtonPosition = true;
    this.authenticationMethod = true;
    this.externalChatPrimaryFontColor = true;
    this.externalChatSecondaryFontColor = true;
    this.externalChatRepNameDisplayType = true;
  }
}

export default EndUserDesktopDefinitionLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
