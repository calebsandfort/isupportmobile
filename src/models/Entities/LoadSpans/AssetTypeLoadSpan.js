//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class AssetTypeLoadSpan extends LoadSpanBase {
  type: boolean;
  isPcAsset: boolean;
  customFieldCollectionID: boolean;
  trackWarranty: boolean;
  trackMaintenance: boolean;
  isInventoryType: boolean;
  maintenanceWhoToNotify: boolean;
  warrantyWhoToNotify: boolean;
  lowUnitWhoToNotify: boolean;
  optionalFields: boolean;

  constructor(){
    super();
    this.type = false;
    this.isPcAsset = false;
    this.customFieldCollectionID = false;
    this.trackWarranty = false;
    this.trackMaintenance = false;
    this.isInventoryType = false;
    this.maintenanceWhoToNotify = false;
    this.warrantyWhoToNotify = false;
    this.lowUnitWhoToNotify = false;
    this.optionalFields = false;
  }

  loadAllProperties() {
    this.type = true;
    this.isPcAsset = true;
    this.customFieldCollectionID = true;
    this.trackWarranty = true;
    this.trackMaintenance = true;
    this.isInventoryType = true;
    this.maintenanceWhoToNotify = true;
    this.warrantyWhoToNotify = true;
    this.lowUnitWhoToNotify = true;
    this.optionalFields = true;
  }
}

export default AssetTypeLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
