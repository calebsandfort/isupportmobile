//@flow
import EntityBase from './entityBase';
import Location from './Location';
import EndUserDesktopDefinition from './EndUserDesktopDefinition';
import {GroupTypes} from './Enums';

export class Group extends EntityBase {
  name: string;
  description: string;
  tag: string;
  groupType: GroupTypes;
  location: Location;
  defaultSocialClient: EndUserDesktopDefinition;

  static fromApiEntity(apiGroup:GroupType): Group {
    let group = new Group();
    group.id = apiGroup.id;
    group.name = apiGroup.name;
    group.description = apiGroup.description;
    group.tag = apiGroup.tag;
    group.groupType = GroupTypes.enumOrdinalOf(parseInt(apiGroup.groupType, 10));
    if (apiGroup.location) group.location = Location.fromApiEntity(apiGroup.location);
    if (apiGroup.defaultSocialClient) group.defaultSocialClient = EndUserDesktopDefinition.fromApiEntity(apiGroup.defaultSocialClient);

    return group;
  }
}

export default Group;

export type GroupType = {
  id: number,
  name: string;
  description: string;
  tag: string;
  groupType: GroupTypes;
  location: Location;
  defaultSocialClient: EndUserDesktopDefinition;
}

