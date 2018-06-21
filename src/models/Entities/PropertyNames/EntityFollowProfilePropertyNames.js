//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import NewsFeedOptionsPropertyNames from './NewsFeedOptionsPropertyNames';

class EntityFollowProfilePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get entityType (): string {
    return super.resolvePropertyName("EntityType");
  }
  get newsFeedOptions (): NewsFeedOptionsPropertyNames {
    return new NewsFeedOptionsPropertyNames(super.resolvePropertyName("NewsFeedOptions"));
  }
}

export default EntityFollowProfilePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
