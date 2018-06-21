//@flow
import EntityBase from './entityBase';

export class SocialClientNavigator extends EntityBase {
  name: string;
  navigatorXml: string;

  static fromApiEntity(apiSocialClientNavigator:SocialClientNavigatorType): SocialClientNavigator {
    let socialClientNavigator = new SocialClientNavigator();
    socialClientNavigator.id = apiSocialClientNavigator.id;
    socialClientNavigator.name = apiSocialClientNavigator.name;
    socialClientNavigator.navigatorXml = apiSocialClientNavigator.navigatorXml;

    return socialClientNavigator;
  }
}

export default SocialClientNavigator;

export type SocialClientNavigatorType = {
  id: number,
  name: string;
  navigatorXml: string;
}

