//@flow
import EntityBase from './entityBase';
import ArchivedIncident from './ArchivedIncident';

export class ArchivedAsset extends EntityBase {
  tagNumber: string;
  type: string;
  location: string;
  name: string;
  owner: string;
  incident: ArchivedIncident;

  static fromApiEntity(apiArchivedAsset:ArchivedAssetType): ArchivedAsset {
    let archivedAsset = new ArchivedAsset();
    archivedAsset.id = apiArchivedAsset.id;
    archivedAsset.tagNumber = apiArchivedAsset.tagNumber;
    archivedAsset.type = apiArchivedAsset.type;
    archivedAsset.location = apiArchivedAsset.location;
    archivedAsset.name = apiArchivedAsset.name;
    archivedAsset.owner = apiArchivedAsset.owner;
    if (apiArchivedAsset.incident) archivedAsset.incident = ArchivedIncident.fromApiEntity(apiArchivedAsset.incident);

    return archivedAsset;
  }
}

export default ArchivedAsset;

export type ArchivedAssetType = {
  id: number,
  tagNumber: string;
  type: string;
  location: string;
  name: string;
  owner: string;
  incident: ArchivedIncident;
}

