//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ChangeTemplateLoadSpan from './ChangeTemplateLoadSpan';
import PurchaseTemplateLoadSpan from './PurchaseTemplateLoadSpan';
import ServiceCatalogLoadSpan from './ServiceCatalogLoadSpan';
import ConfigurationItemLoadSpan from './ConfigurationItemLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ServiceCatalogEntryLoadSpan extends LoadSpanBase {
  name: boolean;
  required: boolean;
  isRadioButton: boolean;
  description: boolean;
  headerTitle: boolean;
  header: boolean;
  footerTitle: boolean;
  footer: boolean;
  associatedCost: boolean;
  link: boolean;
  position: boolean;
  customIcon: boolean;
  changeTemplate: ChangeTemplateLoadSpan;
  purchaseTemplate: PurchaseTemplateLoadSpan;
  serviceCatalog: ServiceCatalogLoadSpan;
  parent: ServiceCatalogEntryLoadSpan;
  configurationItem: ConfigurationItemLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.required = false;
    this.isRadioButton = false;
    this.description = false;
    this.headerTitle = false;
    this.header = false;
    this.footerTitle = false;
    this.footer = false;
    this.associatedCost = false;
    this.link = false;
    this.position = false;
    this.customIcon = false;
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

  get serviceCatalogLoadSpan(): ServiceCatalogLoadSpan {
    if(!this.serviceCatalog){
		this.serviceCatalog = new ServiceCatalogLoadSpan();
	}

    return this.serviceCatalog;
  }

  get parentLoadSpan(): ServiceCatalogEntryLoadSpan {
    if(!this.parent){
		this.parent = new ServiceCatalogEntryLoadSpan();
	}

    return this.parent;
  }

  get configurationItemLoadSpan(): ConfigurationItemLoadSpan {
    if(!this.configurationItem){
		this.configurationItem = new ConfigurationItemLoadSpan();
	}

    return this.configurationItem;
  }

  loadAllProperties() {
    this.name = true;
    this.required = true;
    this.isRadioButton = true;
    this.description = true;
    this.headerTitle = true;
    this.header = true;
    this.footerTitle = true;
    this.footer = true;
    this.associatedCost = true;
    this.link = true;
    this.position = true;
    this.customIcon = true;
  }
}

export default ServiceCatalogEntryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
