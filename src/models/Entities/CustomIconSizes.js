//@flow
import EntityBase from './entityBase';
import CustomIcon from './CustomIcon';

export class CustomIconSizes extends EntityBase {
  iconData: string;
  iconSize: string;
  iconID: CustomIcon;

  static fromApiEntity(apiCustomIconSizes:CustomIconSizesType): CustomIconSizes {
    let customIconSizes = new CustomIconSizes();
    customIconSizes.id = apiCustomIconSizes.id;
    customIconSizes.iconData = apiCustomIconSizes.iconData;
    customIconSizes.iconSize = apiCustomIconSizes.iconSize;
    if (apiCustomIconSizes.iconID) customIconSizes.iconID = CustomIcon.fromApiEntity(apiCustomIconSizes.iconID);

    return customIconSizes;
  }
}

export default CustomIconSizes;

export type CustomIconSizesType = {
  id: number,
  iconData: string;
  iconSize: string;
  iconID: CustomIcon;
}

