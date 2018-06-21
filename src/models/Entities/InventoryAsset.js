//@flow
import EntityBase from './entityBase';

export class InventoryAsset extends EntityBase {

  static fromApiEntity(apiInventoryAsset:InventoryAssetType): InventoryAsset {
    let inventoryAsset = new InventoryAsset();
    inventoryAsset.id = apiInventoryAsset.id;

    return inventoryAsset;
  }
}

export default InventoryAsset;

export type InventoryAssetType = {
  id: number,
}

