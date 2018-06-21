//@flow
import EntityBase from './entityBase';

export class CustomIcon extends EntityBase {

  static fromApiEntity(apiCustomIcon:CustomIconType): CustomIcon {
    let customIcon = new CustomIcon();
    customIcon.id = apiCustomIcon.id;

    return customIcon;
  }
}

export default CustomIcon;

export type CustomIconType = {
  id: number,
}

