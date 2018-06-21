//@flow
import EntityBase from './entityBase';

export class CostCenter extends EntityBase {
  name: string;
  customFieldCollectionIdentifier: string;

  static fromApiEntity(apiCostCenter:CostCenterType): CostCenter {
    let costCenter = new CostCenter();
    costCenter.id = apiCostCenter.id;
    costCenter.name = apiCostCenter.name;
    costCenter.customFieldCollectionIdentifier = apiCostCenter.customFieldCollectionIdentifier;

    return costCenter;
  }
}

export default CostCenter;

export type CostCenterType = {
  id: number,
  name: string;
  customFieldCollectionIdentifier: string;
}

