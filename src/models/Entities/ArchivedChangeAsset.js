//@flow
import EntityBase from './entityBase';
import ArchivedChange from './ArchivedChange';

export class ArchivedChangeAsset extends EntityBase {
  tagNumber: string;
  type: string;
  location: string;
  name: string;
  owner: string;
  change: ArchivedChange;

  static fromApiEntity(apiArchivedChangeAsset:ArchivedChangeAssetType): ArchivedChangeAsset {
    let archivedChangeAsset = new ArchivedChangeAsset();
    archivedChangeAsset.id = apiArchivedChangeAsset.id;
    archivedChangeAsset.tagNumber = apiArchivedChangeAsset.tagNumber;
    archivedChangeAsset.type = apiArchivedChangeAsset.type;
    archivedChangeAsset.location = apiArchivedChangeAsset.location;
    archivedChangeAsset.name = apiArchivedChangeAsset.name;
    archivedChangeAsset.owner = apiArchivedChangeAsset.owner;
    if (apiArchivedChangeAsset.change) archivedChangeAsset.change = ArchivedChange.fromApiEntity(apiArchivedChangeAsset.change);

    return archivedChangeAsset;
  }
}

export default ArchivedChangeAsset;

export type ArchivedChangeAssetType = {
  id: number,
  tagNumber: string;
  type: string;
  location: string;
  name: string;
  owner: string;
  change: ArchivedChange;
}

