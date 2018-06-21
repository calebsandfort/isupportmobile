//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ChangeTemplatePropertyNames from './ChangeTemplatePropertyNames';
import PurchaseTemplatePropertyNames from './PurchaseTemplatePropertyNames';
import ServiceCatalogPropertyNames from './ServiceCatalogPropertyNames';
import ConfigurationItemPropertyNames from './ConfigurationItemPropertyNames';

class ServiceCatalogEntryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get required (): string {
    return super.resolvePropertyName("Required");
  }
  get isRadioButton (): string {
    return super.resolvePropertyName("IsRadioButton");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get headerTitle (): string {
    return super.resolvePropertyName("HeaderTitle");
  }
  get header (): string {
    return super.resolvePropertyName("Header");
  }
  get footerTitle (): string {
    return super.resolvePropertyName("FooterTitle");
  }
  get footer (): string {
    return super.resolvePropertyName("Footer");
  }
  get associatedCost (): string {
    return super.resolvePropertyName("AssociatedCost");
  }
  get link (): string {
    return super.resolvePropertyName("Link");
  }
  get position (): string {
    return super.resolvePropertyName("Position");
  }
  get customIcon (): string {
    return super.resolvePropertyName("CustomIcon");
  }
  get changeTemplate (): ChangeTemplatePropertyNames {
    return new ChangeTemplatePropertyNames(super.resolvePropertyName("ChangeTemplate"));
  }
  get purchaseTemplate (): PurchaseTemplatePropertyNames {
    return new PurchaseTemplatePropertyNames(super.resolvePropertyName("PurchaseTemplate"));
  }
  get serviceCatalog (): ServiceCatalogPropertyNames {
    return new ServiceCatalogPropertyNames(super.resolvePropertyName("ServiceCatalog"));
  }
  get parent (): ServiceCatalogEntryPropertyNames {
    return new ServiceCatalogEntryPropertyNames(super.resolvePropertyName("Parent"));
  }
  get configurationItem (): ConfigurationItemPropertyNames {
    return new ConfigurationItemPropertyNames(super.resolvePropertyName("ConfigurationItem"));
  }
}

export default ServiceCatalogEntryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
