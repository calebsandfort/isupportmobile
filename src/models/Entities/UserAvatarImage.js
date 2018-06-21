//@flow
import EntityBase from './entityBase';

export class UserAvatarImage extends EntityBase {
  imageData: string;

  static fromApiEntity(apiUserAvatarImage:UserAvatarImageType): UserAvatarImage {
    let userAvatarImage = new UserAvatarImage();
    userAvatarImage.id = apiUserAvatarImage.id;
    userAvatarImage.imageData = apiUserAvatarImage.imageData;

    return userAvatarImage;
  }
}

export default UserAvatarImage;

export type UserAvatarImageType = {
  id: number,
  imageData: string;
}

