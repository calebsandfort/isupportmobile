//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import AssetLoadSpan from './AssetLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class AssetAuditHistoryLoadSpan extends LoadSpanBase {
  createdDate: boolean;
  entry: boolean;
  owner: SupportRepresentativeLoadSpan;
  asset: AssetLoadSpan;

  constructor(){
    super();
    this.createdDate = false;
    this.entry = false;
  }

  get ownerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.owner){
		this.owner = new SupportRepresentativeLoadSpan();
	}

    return this.owner;
  }

  get assetLoadSpan(): AssetLoadSpan {
    if(!this.asset){
		this.asset = new AssetLoadSpan();
	}

    return this.asset;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
  }
}

export default AssetAuditHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
