//@flow
import EntityBase from './entityBase';

export class Location extends EntityBase {
  name: string;

  static fromApiEntity(apiLocation:LocationType): Location {
    let location = new Location();
    location.id = apiLocation.id;
    location.name = apiLocation.name;

    return location;
  }
}

export default Location;

export type LocationType = {
  id: number,
  name: string;
}

