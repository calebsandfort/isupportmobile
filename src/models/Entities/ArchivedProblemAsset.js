//@flow
import EntityBase from './entityBase';
import ArchivedProblem from './ArchivedProblem';

export class ArchivedProblemAsset extends EntityBase {
  tagNumber: string;
  type: string;
  location: string;
  name: string;
  owner: string;
  problem: ArchivedProblem;

  static fromApiEntity(apiArchivedProblemAsset:ArchivedProblemAssetType): ArchivedProblemAsset {
    let archivedProblemAsset = new ArchivedProblemAsset();
    archivedProblemAsset.id = apiArchivedProblemAsset.id;
    archivedProblemAsset.tagNumber = apiArchivedProblemAsset.tagNumber;
    archivedProblemAsset.type = apiArchivedProblemAsset.type;
    archivedProblemAsset.location = apiArchivedProblemAsset.location;
    archivedProblemAsset.name = apiArchivedProblemAsset.name;
    archivedProblemAsset.owner = apiArchivedProblemAsset.owner;
    if (apiArchivedProblemAsset.problem) archivedProblemAsset.problem = ArchivedProblem.fromApiEntity(apiArchivedProblemAsset.problem);

    return archivedProblemAsset;
  }
}

export default ArchivedProblemAsset;

export type ArchivedProblemAssetType = {
  id: number,
  tagNumber: string;
  type: string;
  location: string;
  name: string;
  owner: string;
  problem: ArchivedProblem;
}

