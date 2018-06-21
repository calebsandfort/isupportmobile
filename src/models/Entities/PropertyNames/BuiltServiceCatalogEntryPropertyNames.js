//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ChangePropertyNames from './ChangePropertyNames';
import PurchasePropertyNames from './PurchasePropertyNames';
import ServiceCatalogPropertyNames from './ServiceCatalogPropertyNames';
import ConfigurationItemPropertyNames from './ConfigurationItemPropertyNames';
import ChangeTemplatePropertyNames from './ChangeTemplatePropertyNames';
import PurchaseTemplatePropertyNames from './PurchaseTemplatePropertyNames';
import ServiceCatalogEntryPropertyNames from './ServiceCatalogEntryPropertyNames';

class BuiltServiceCatalogEntryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get associatedCost (): string {
    return super.resolvePropertyName("AssociatedCost");
  }
  get isPlaceHolder (): string {
    return super.resolvePropertyName("IsPlaceHolder");
  }
  get selectedTemplateProductIds (): string {
    return super.resolvePropertyName("SelectedTemplateProductIds");
  }
  get link (): string {
    return super.resolvePropertyName("Link");
  }
  get change (): ChangePropertyNames {
    return new ChangePropertyNames(super.resolvePropertyName("Change"));
  }
  get purchase (): PurchasePropertyNames {
    return new PurchasePropertyNames(super.resolvePropertyName("Purchase"));
  }
  get serviceCatalog (): ServiceCatalogPropertyNames {
    return new ServiceCatalogPropertyNames(super.resolvePropertyName("ServiceCatalog"));
  }
  get parent (): BuiltServiceCatalogEntryPropertyNames {
    return new BuiltServiceCatalogEntryPropertyNames(super.resolvePropertyName("Parent"));
  }
  get configurationItem (): ConfigurationItemPropertyNames {
    return new ConfigurationItemPropertyNames(super.resolvePropertyName("ConfigurationItem"));
  }
  get changeTemplate (): ChangeTemplatePropertyNames {
    return new ChangeTemplatePropertyNames(super.resolvePropertyName("ChangeTemplate"));
  }
  get purchaseTemplate (): PurchaseTemplatePropertyNames {
    return new PurchaseTemplatePropertyNames(super.resolvePropertyName("PurchaseTemplate"));
  }
  get serviceCatalogEntry (): ServiceCatalogEntryPropertyNames {
    return new ServiceCatalogEntryPropertyNames(super.resolvePropertyName("ServiceCatalogEntry"));
  }
}

export default BuiltServiceCatalogEntryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
