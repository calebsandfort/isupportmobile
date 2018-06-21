//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomIconPropertyNames from './CustomIconPropertyNames';

class CustomIconSizesPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get iconData (): string {
    return super.resolvePropertyName("IconData");
  }
  get iconSize (): string {
    return super.resolvePropertyName("IconSize");
  }
  get iconID (): CustomIconPropertyNames {
    return new CustomIconPropertyNames(super.resolvePropertyName("IconID"));
  }
}

export default CustomIconSizesPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
