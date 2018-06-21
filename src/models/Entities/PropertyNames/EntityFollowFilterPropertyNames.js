//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import EntityFollowProfilePropertyNames from './EntityFollowProfilePropertyNames';

class EntityFollowFilterPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get filterValue (): string {
    return super.resolvePropertyName("FilterValue");
  }
  get helperValue1 (): string {
    return super.resolvePropertyName("HelperValue1");
  }
  get helperValue2 (): string {
    return super.resolvePropertyName("HelperValue2");
  }
  get lastNotifiedDate (): string {
    return super.resolvePropertyName("LastNotifiedDate");
  }
  get followField (): string {
    return super.resolvePropertyName("FollowField");
  }
  get entityFollowProfile (): EntityFollowProfilePropertyNames {
    return new EntityFollowProfilePropertyNames(super.resolvePropertyName("EntityFollowProfile"));
  }
}

export default EntityFollowFilterPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
