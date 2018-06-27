//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ChangeLoadSpan from './ChangeLoadSpan';
import PurchaseLoadSpan from './PurchaseLoadSpan';
import ServiceCatalogLoadSpan from './ServiceCatalogLoadSpan';
import ConfigurationItemLoadSpan from './ConfigurationItemLoadSpan';
import ChangeTemplateLoadSpan from './ChangeTemplateLoadSpan';
import PurchaseTemplateLoadSpan from './PurchaseTemplateLoadSpan';
import ServiceCatalogEntryLoadSpan from './ServiceCatalogEntryLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class BuiltServiceCatalogEntryLoadSpan extends LoadSpanBase {
  name: boolean;
  associatedCost: boolean;
  isPlaceHolder: boolean;
  selectedTemplateProductIds: boolean;
  link: boolean;
  change: ChangeLoadSpan;
  purchase: PurchaseLoadSpan;
  serviceCatalog: ServiceCatalogLoadSpan;
  parent: BuiltServiceCatalogEntryLoadSpan;
  configurationItem: ConfigurationItemLoadSpan;
  changeTemplate: ChangeTemplateLoadSpan;
  purchaseTemplate: PurchaseTemplateLoadSpan;
  serviceCatalogEntry: ServiceCatalogEntryLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.associatedCost = false;
    this.isPlaceHolder = false;
    this.selectedTemplateProductIds = false;
    this.link = false;
  }

  get changeLoadSpan(): ChangeLoadSpan {
    if(!this.change){
		this.change = new ChangeLoadSpan();
	}

    return this.change;
  }

  get purchaseLoadSpan(): PurchaseLoadSpan {
    if(!this.purchase){
		this.purchase = new PurchaseLoadSpan();
	}

    return this.purchase;
  }

  get serviceCatalogLoadSpan(): ServiceCatalogLoadSpan {
    if(!this.serviceCatalog){
		this.serviceCatalog = new ServiceCatalogLoadSpan();
	}

    return this.serviceCatalog;
  }

  get parentLoadSpan(): BuiltServiceCatalogEntryLoadSpan {
    if(!this.parent){
		this.parent = new BuiltServiceCatalogEntryLoadSpan();
	}

    return this.parent;
  }

  get configurationItemLoadSpan(): ConfigurationItemLoadSpan {
    if(!this.configurationItem){
		this.configurationItem = new ConfigurationItemLoadSpan();
	}

    return this.configurationItem;
  }

  get changeTemplateLoadSpan(): ChangeTemplateLoadSpan {
    if(!this.changeTemplate){
		this.changeTemplate = new ChangeTemplateLoadSpan();
	}

    return this.changeTemplate;
  }

  get purchaseTemplateLoadSpan(): PurchaseTemplateLoadSpan {
    if(!this.purchaseTemplate){
		this.purchaseTemplate = new PurchaseTemplateLoadSpan();
	}

    return this.purchaseTemplate;
  }

  get serviceCatalogEntryLoadSpan(): ServiceCatalogEntryLoadSpan {
    if(!this.serviceCatalogEntry){
		this.serviceCatalogEntry = new ServiceCatalogEntryLoadSpan();
	}

    return this.serviceCatalogEntry;
  }

  loadAllProperties() {
    this.name = true;
    this.associatedCost = true;
    this.isPlaceHolder = true;
    this.selectedTemplateProductIds = true;
    this.link = true;
  }
}

export default BuiltServiceCatalogEntryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
