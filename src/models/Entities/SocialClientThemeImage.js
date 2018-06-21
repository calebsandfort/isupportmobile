//@flow
import EntityBase from './entityBase';

export class SocialClientThemeImage extends EntityBase {
  imageData: string;
  height: string;

  static fromApiEntity(apiSocialClientThemeImage:SocialClientThemeImageType): SocialClientThemeImage {
    let socialClientThemeImage = new SocialClientThemeImage();
    socialClientThemeImage.id = apiSocialClientThemeImage.id;
    socialClientThemeImage.imageData = apiSocialClientThemeImage.imageData;
    socialClientThemeImage.height = apiSocialClientThemeImage.height;

    return socialClientThemeImage;
  }
}

export default SocialClientThemeImage;

export type SocialClientThemeImageType = {
  id: number,
  imageData: string;
  height: string;
}

