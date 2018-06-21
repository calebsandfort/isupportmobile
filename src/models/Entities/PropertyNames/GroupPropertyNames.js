//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import LocationPropertyNames from './LocationPropertyNames';
import EndUserDesktopDefinitionPropertyNames from './EndUserDesktopDefinitionPropertyNames';

class GroupPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get tag (): string {
    return super.resolvePropertyName("Tag");
  }
  get groupType (): string {
    return super.resolvePropertyName("GroupType");
  }
  get location (): LocationPropertyNames {
    return new LocationPropertyNames(super.resolvePropertyName("Location"));
  }
  get defaultSocialClient (): EndUserDesktopDefinitionPropertyNames {
    return new EndUserDesktopDefinitionPropertyNames(super.resolvePropertyName("DefaultSocialClient"));
  }
}

export default GroupPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
