//@flow
import EntityBase from './entityBase';
import SocialClientOptions from './SocialClientOptions';
import IncidentTemplate from './IncidentTemplate';
import MySupportFeed from './MySupportFeed';
import {LayoutPositions} from './Enums';
import {EudAuthenticationTypes} from './Enums';
import {FontColorSettings} from './Enums';
import {ExternalChatRepNameDisplayTypes} from './Enums';

export class EndUserDesktopDefinition extends EntityBase {
  name: string;
  url: string;
  defaultAuthenticationTitle: string;
  groupPermissionsEnabled: string;
  socialClientOptionsOrderOfPrecedence: string;
  isDefault: string;
  externalChatEnabled: string;
  externalChatButtonVerticalOffset: string;
  externalChatButtonHorizontalOffset: string;
  externalChatButtonDelay: string;
  externalChatApprovedSites: string;
  externalChatToastGreetingEnabled: string;
  externalChatToastGreeting: string;
  externalChatToastGreetingDelay: string;
  externalChatToastGreetingDeactivateAfter: string;
  externalChatAllowAnonymous: string;
  externalChatUseDefaultColors: string;
  externalChatPrimaryColor: string;
  externalChatSecondaryColor: string;
  externalChatRepOtherDisplayName: string;
  externalChatButtonPosition: LayoutPositions;
  authenticationMethod: EudAuthenticationTypes;
  externalChatPrimaryFontColor: FontColorSettings;
  externalChatSecondaryFontColor: FontColorSettings;
  externalChatRepNameDisplayType: ExternalChatRepNameDisplayTypes;
  defaultSocialClientOptions: SocialClientOptions;
  defaultMobileSocialClientOptions: SocialClientOptions;
  easySubmitTemplate: IncidentTemplate;
  knowledgeEntryFeed: MySupportFeed;

  static fromApiEntity(apiEndUserDesktopDefinition:EndUserDesktopDefinitionType): EndUserDesktopDefinition {
    let endUserDesktopDefinition = new EndUserDesktopDefinition();
    endUserDesktopDefinition.id = apiEndUserDesktopDefinition.id;
    endUserDesktopDefinition.name = apiEndUserDesktopDefinition.name;
    endUserDesktopDefinition.url = apiEndUserDesktopDefinition.url;
    endUserDesktopDefinition.defaultAuthenticationTitle = apiEndUserDesktopDefinition.defaultAuthenticationTitle;
    endUserDesktopDefinition.groupPermissionsEnabled = apiEndUserDesktopDefinition.groupPermissionsEnabled;
    endUserDesktopDefinition.socialClientOptionsOrderOfPrecedence = apiEndUserDesktopDefinition.socialClientOptionsOrderOfPrecedence;
    endUserDesktopDefinition.isDefault = apiEndUserDesktopDefinition.isDefault;
    endUserDesktopDefinition.externalChatEnabled = apiEndUserDesktopDefinition.externalChatEnabled;
    endUserDesktopDefinition.externalChatButtonVerticalOffset = apiEndUserDesktopDefinition.externalChatButtonVerticalOffset;
    endUserDesktopDefinition.externalChatButtonHorizontalOffset = apiEndUserDesktopDefinition.externalChatButtonHorizontalOffset;
    endUserDesktopDefinition.externalChatButtonDelay = apiEndUserDesktopDefinition.externalChatButtonDelay;
    endUserDesktopDefinition.externalChatApprovedSites = apiEndUserDesktopDefinition.externalChatApprovedSites;
    endUserDesktopDefinition.externalChatToastGreetingEnabled = apiEndUserDesktopDefinition.externalChatToastGreetingEnabled;
    endUserDesktopDefinition.externalChatToastGreeting = apiEndUserDesktopDefinition.externalChatToastGreeting;
    endUserDesktopDefinition.externalChatToastGreetingDelay = apiEndUserDesktopDefinition.externalChatToastGreetingDelay;
    endUserDesktopDefinition.externalChatToastGreetingDeactivateAfter = apiEndUserDesktopDefinition.externalChatToastGreetingDeactivateAfter;
    endUserDesktopDefinition.externalChatAllowAnonymous = apiEndUserDesktopDefinition.externalChatAllowAnonymous;
    endUserDesktopDefinition.externalChatUseDefaultColors = apiEndUserDesktopDefinition.externalChatUseDefaultColors;
    endUserDesktopDefinition.externalChatPrimaryColor = apiEndUserDesktopDefinition.externalChatPrimaryColor;
    endUserDesktopDefinition.externalChatSecondaryColor = apiEndUserDesktopDefinition.externalChatSecondaryColor;
    endUserDesktopDefinition.externalChatRepOtherDisplayName = apiEndUserDesktopDefinition.externalChatRepOtherDisplayName;
    endUserDesktopDefinition.externalChatButtonPosition = LayoutPositions.enumOrdinalOf(parseInt(apiEndUserDesktopDefinition.externalChatButtonPosition, 10));
    endUserDesktopDefinition.authenticationMethod = EudAuthenticationTypes.enumOrdinalOf(parseInt(apiEndUserDesktopDefinition.authenticationMethod, 10));
    endUserDesktopDefinition.externalChatPrimaryFontColor = FontColorSettings.enumOrdinalOf(parseInt(apiEndUserDesktopDefinition.externalChatPrimaryFontColor, 10));
    endUserDesktopDefinition.externalChatSecondaryFontColor = FontColorSettings.enumOrdinalOf(parseInt(apiEndUserDesktopDefinition.externalChatSecondaryFontColor, 10));
    endUserDesktopDefinition.externalChatRepNameDisplayType = ExternalChatRepNameDisplayTypes.enumOrdinalOf(parseInt(apiEndUserDesktopDefinition.externalChatRepNameDisplayType, 10));
    if (apiEndUserDesktopDefinition.defaultSocialClientOptions) endUserDesktopDefinition.defaultSocialClientOptions = SocialClientOptions.fromApiEntity(apiEndUserDesktopDefinition.defaultSocialClientOptions);
    if (apiEndUserDesktopDefinition.defaultMobileSocialClientOptions) endUserDesktopDefinition.defaultMobileSocialClientOptions = SocialClientOptions.fromApiEntity(apiEndUserDesktopDefinition.defaultMobileSocialClientOptions);
    if (apiEndUserDesktopDefinition.easySubmitTemplate) endUserDesktopDefinition.easySubmitTemplate = IncidentTemplate.fromApiEntity(apiEndUserDesktopDefinition.easySubmitTemplate);
    if (apiEndUserDesktopDefinition.knowledgeEntryFeed) endUserDesktopDefinition.knowledgeEntryFeed = MySupportFeed.fromApiEntity(apiEndUserDesktopDefinition.knowledgeEntryFeed);

    return endUserDesktopDefinition;
  }
}

export default EndUserDesktopDefinition;

export type EndUserDesktopDefinitionType = {
  id: number,
  name: string;
  url: string;
  defaultAuthenticationTitle: string;
  groupPermissionsEnabled: string;
  socialClientOptionsOrderOfPrecedence: string;
  isDefault: string;
  externalChatEnabled: string;
  externalChatButtonVerticalOffset: string;
  externalChatButtonHorizontalOffset: string;
  externalChatButtonDelay: string;
  externalChatApprovedSites: string;
  externalChatToastGreetingEnabled: string;
  externalChatToastGreeting: string;
  externalChatToastGreetingDelay: string;
  externalChatToastGreetingDeactivateAfter: string;
  externalChatAllowAnonymous: string;
  externalChatUseDefaultColors: string;
  externalChatPrimaryColor: string;
  externalChatSecondaryColor: string;
  externalChatRepOtherDisplayName: string;
  externalChatButtonPosition: LayoutPositions;
  authenticationMethod: EudAuthenticationTypes;
  externalChatPrimaryFontColor: FontColorSettings;
  externalChatSecondaryFontColor: FontColorSettings;
  externalChatRepNameDisplayType: ExternalChatRepNameDisplayTypes;
  defaultSocialClientOptions: SocialClientOptions;
  defaultMobileSocialClientOptions: SocialClientOptions;
  easySubmitTemplate: IncidentTemplate;
  knowledgeEntryFeed: MySupportFeed;
}

