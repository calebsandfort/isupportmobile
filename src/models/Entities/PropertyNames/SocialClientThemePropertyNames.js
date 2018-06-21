//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SocialClientThemeImagePropertyNames from './SocialClientThemeImagePropertyNames';

class SocialClientThemePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get modifiedDate (): string {
    return super.resolvePropertyName("ModifiedDate");
  }
  get widgetFontFamily (): string {
    return super.resolvePropertyName("WidgetFontFamily");
  }
  get isDefault (): string {
    return super.resolvePropertyName("IsDefault");
  }
  get bootstrapVariables (): string {
    return super.resolvePropertyName("BootstrapVariables");
  }
  get bootstrapCss (): string {
    return super.resolvePropertyName("BootstrapCss");
  }
  get headerImage (): SocialClientThemeImagePropertyNames {
    return new SocialClientThemeImagePropertyNames(super.resolvePropertyName("HeaderImage"));
  }
}

export default SocialClientThemePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
