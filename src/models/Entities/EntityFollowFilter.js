//@flow
import EntityBase from './entityBase';
import EntityFollowProfile from './EntityFollowProfile';
import {EntityFields} from './Enums';

export class EntityFollowFilter extends EntityBase {
  filterValue: string;
  helperValue1: string;
  helperValue2: string;
  lastNotifiedDate: string;
  followField: EntityFields;
  entityFollowProfile: EntityFollowProfile;

  static fromApiEntity(apiEntityFollowFilter:EntityFollowFilterType): EntityFollowFilter {
    let entityFollowFilter = new EntityFollowFilter();
    entityFollowFilter.id = apiEntityFollowFilter.id;
    entityFollowFilter.filterValue = apiEntityFollowFilter.filterValue;
    entityFollowFilter.helperValue1 = apiEntityFollowFilter.helperValue1;
    entityFollowFilter.helperValue2 = apiEntityFollowFilter.helperValue2;
    entityFollowFilter.lastNotifiedDate = apiEntityFollowFilter.lastNotifiedDate;
    entityFollowFilter.followField = EntityFields.enumOrdinalOf(parseInt(apiEntityFollowFilter.followField, 10));
    if (apiEntityFollowFilter.entityFollowProfile) entityFollowFilter.entityFollowProfile = EntityFollowProfile.fromApiEntity(apiEntityFollowFilter.entityFollowProfile);

    return entityFollowFilter;
  }
}

export default EntityFollowFilter;

export type EntityFollowFilterType = {
  id: number,
  filterValue: string;
  helperValue1: string;
  helperValue2: string;
  lastNotifiedDate: string;
  followField: EntityFields;
  entityFollowProfile: EntityFollowProfile;
}

