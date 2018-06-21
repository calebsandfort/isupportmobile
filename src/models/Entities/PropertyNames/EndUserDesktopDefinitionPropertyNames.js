//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SocialClientOptionsPropertyNames from './SocialClientOptionsPropertyNames';
import IncidentTemplatePropertyNames from './IncidentTemplatePropertyNames';
import MySupportFeedPropertyNames from './MySupportFeedPropertyNames';

class EndUserDesktopDefinitionPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get url (): string {
    return super.resolvePropertyName("Url");
  }
  get defaultAuthenticationTitle (): string {
    return super.resolvePropertyName("DefaultAuthenticationTitle");
  }
  get groupPermissionsEnabled (): string {
    return super.resolvePropertyName("GroupPermissionsEnabled");
  }
  get socialClientOptionsOrderOfPrecedence (): string {
    return super.resolvePropertyName("SocialClientOptionsOrderOfPrecedence");
  }
  get isDefault (): string {
    return super.resolvePropertyName("IsDefault");
  }
  get externalChatEnabled (): string {
    return super.resolvePropertyName("ExternalChatEnabled");
  }
  get externalChatButtonVerticalOffset (): string {
    return super.resolvePropertyName("ExternalChatButtonVerticalOffset");
  }
  get externalChatButtonHorizontalOffset (): string {
    return super.resolvePropertyName("ExternalChatButtonHorizontalOffset");
  }
  get externalChatButtonDelay (): string {
    return super.resolvePropertyName("ExternalChatButtonDelay");
  }
  get externalChatApprovedSites (): string {
    return super.resolvePropertyName("ExternalChatApprovedSites");
  }
  get externalChatToastGreetingEnabled (): string {
    return super.resolvePropertyName("ExternalChatToastGreetingEnabled");
  }
  get externalChatToastGreeting (): string {
    return super.resolvePropertyName("ExternalChatToastGreeting");
  }
  get externalChatToastGreetingDelay (): string {
    return super.resolvePropertyName("ExternalChatToastGreetingDelay");
  }
  get externalChatToastGreetingDeactivateAfter (): string {
    return super.resolvePropertyName("ExternalChatToastGreetingDeactivateAfter");
  }
  get externalChatAllowAnonymous (): string {
    return super.resolvePropertyName("ExternalChatAllowAnonymous");
  }
  get externalChatUseDefaultColors (): string {
    return super.resolvePropertyName("ExternalChatUseDefaultColors");
  }
  get externalChatPrimaryColor (): string {
    return super.resolvePropertyName("ExternalChatPrimaryColor");
  }
  get externalChatSecondaryColor (): string {
    return super.resolvePropertyName("ExternalChatSecondaryColor");
  }
  get externalChatRepOtherDisplayName (): string {
    return super.resolvePropertyName("ExternalChatRepOtherDisplayName");
  }
  get externalChatButtonPosition (): string {
    return super.resolvePropertyName("ExternalChatButtonPosition");
  }
  get authenticationMethod (): string {
    return super.resolvePropertyName("AuthenticationMethod");
  }
  get externalChatPrimaryFontColor (): string {
    return super.resolvePropertyName("ExternalChatPrimaryFontColor");
  }
  get externalChatSecondaryFontColor (): string {
    return super.resolvePropertyName("ExternalChatSecondaryFontColor");
  }
  get externalChatRepNameDisplayType (): string {
    return super.resolvePropertyName("ExternalChatRepNameDisplayType");
  }
  get defaultSocialClientOptions (): SocialClientOptionsPropertyNames {
    return new SocialClientOptionsPropertyNames(super.resolvePropertyName("DefaultSocialClientOptions"));
  }
  get defaultMobileSocialClientOptions (): SocialClientOptionsPropertyNames {
    return new SocialClientOptionsPropertyNames(super.resolvePropertyName("DefaultMobileSocialClientOptions"));
  }
  get easySubmitTemplate (): IncidentTemplatePropertyNames {
    return new IncidentTemplatePropertyNames(super.resolvePropertyName("EasySubmitTemplate"));
  }
  get knowledgeEntryFeed (): MySupportFeedPropertyNames {
    return new MySupportFeedPropertyNames(super.resolvePropertyName("KnowledgeEntryFeed"));
  }
}

export default EndUserDesktopDefinitionPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
