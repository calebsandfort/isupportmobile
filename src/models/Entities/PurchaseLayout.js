//@flow
import EntityBase from './entityBase';
import Tutorial from './Tutorial';

export class PurchaseLayout extends EntityBase {
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;

  static fromApiEntity(apiPurchaseLayout:PurchaseLayoutType): PurchaseLayout {
    let purchaseLayout = new PurchaseLayout();
    purchaseLayout.id = apiPurchaseLayout.id;
    purchaseLayout.detailsLayout = apiPurchaseLayout.detailsLayout;
    purchaseLayout.tabLayout = apiPurchaseLayout.tabLayout;
    if (apiPurchaseLayout.tutorial) purchaseLayout.tutorial = Tutorial.fromApiEntity(apiPurchaseLayout.tutorial);

    return purchaseLayout;
  }
}

export default PurchaseLayout;

export type PurchaseLayoutType = {
  id: number,
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;
}

