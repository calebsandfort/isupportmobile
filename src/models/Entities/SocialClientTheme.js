//@flow
import EntityBase from './entityBase';
import SocialClientThemeImage from './SocialClientThemeImage';

export class SocialClientTheme extends EntityBase {
  modifiedDate: string;
  widgetFontFamily: string;
  isDefault: string;
  bootstrapVariables: string;
  bootstrapCss: string;
  headerImage: SocialClientThemeImage;

  static fromApiEntity(apiSocialClientTheme:SocialClientThemeType): SocialClientTheme {
    let socialClientTheme = new SocialClientTheme();
    socialClientTheme.id = apiSocialClientTheme.id;
    socialClientTheme.modifiedDate = apiSocialClientTheme.modifiedDate;
    socialClientTheme.widgetFontFamily = apiSocialClientTheme.widgetFontFamily;
    socialClientTheme.isDefault = apiSocialClientTheme.isDefault;
    socialClientTheme.bootstrapVariables = apiSocialClientTheme.bootstrapVariables;
    socialClientTheme.bootstrapCss = apiSocialClientTheme.bootstrapCss;
    if (apiSocialClientTheme.headerImage) socialClientTheme.headerImage = SocialClientThemeImage.fromApiEntity(apiSocialClientTheme.headerImage);

    return socialClientTheme;
  }
}

export default SocialClientTheme;

export type SocialClientThemeType = {
  id: number,
  modifiedDate: string;
  widgetFontFamily: string;
  isDefault: string;
  bootstrapVariables: string;
  bootstrapCss: string;
  headerImage: SocialClientThemeImage;
}

