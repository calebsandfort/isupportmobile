//@flow
import EntityBase from './entityBase';
import NewsFeedOptions from './NewsFeedOptions';
import {EntityTypes} from './Enums';

export class EntityFollowProfile extends EntityBase {
  entityType: EntityTypes;
  newsFeedOptions: NewsFeedOptions;

  static fromApiEntity(apiEntityFollowProfile:EntityFollowProfileType): EntityFollowProfile {
    let entityFollowProfile = new EntityFollowProfile();
    entityFollowProfile.id = apiEntityFollowProfile.id;
    entityFollowProfile.entityType = EntityTypes.enumOrdinalOf(parseInt(apiEntityFollowProfile.entityType, 10));
    if (apiEntityFollowProfile.newsFeedOptions) entityFollowProfile.newsFeedOptions = NewsFeedOptions.fromApiEntity(apiEntityFollowProfile.newsFeedOptions);

    return entityFollowProfile;
  }
}

export default EntityFollowProfile;

export type EntityFollowProfileType = {
  id: number,
  entityType: EntityTypes;
  newsFeedOptions: NewsFeedOptions;
}

