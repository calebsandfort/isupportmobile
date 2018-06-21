//@flow
import EntityBase from './entityBase';
import ChangeTemplate from './ChangeTemplate';
import PurchaseTemplate from './PurchaseTemplate';
import ServiceCatalog from './ServiceCatalog';
import ConfigurationItem from './ConfigurationItem';

export class ServiceCatalogEntry extends EntityBase {
  name: string;
  required: string;
  isRadioButton: string;
  description: string;
  headerTitle: string;
  header: string;
  footerTitle: string;
  footer: string;
  associatedCost: string;
  link: string;
  position: string;
  customIcon: string;
  changeTemplate: ChangeTemplate;
  purchaseTemplate: PurchaseTemplate;
  serviceCatalog: ServiceCatalog;
  parent: ServiceCatalogEntry;
  configurationItem: ConfigurationItem;

  static fromApiEntity(apiServiceCatalogEntry:ServiceCatalogEntryType): ServiceCatalogEntry {
    let serviceCatalogEntry = new ServiceCatalogEntry();
    serviceCatalogEntry.id = apiServiceCatalogEntry.id;
    serviceCatalogEntry.name = apiServiceCatalogEntry.name;
    serviceCatalogEntry.required = apiServiceCatalogEntry.required;
    serviceCatalogEntry.isRadioButton = apiServiceCatalogEntry.isRadioButton;
    serviceCatalogEntry.description = apiServiceCatalogEntry.description;
    serviceCatalogEntry.headerTitle = apiServiceCatalogEntry.headerTitle;
    serviceCatalogEntry.header = apiServiceCatalogEntry.header;
    serviceCatalogEntry.footerTitle = apiServiceCatalogEntry.footerTitle;
    serviceCatalogEntry.footer = apiServiceCatalogEntry.footer;
    serviceCatalogEntry.associatedCost = apiServiceCatalogEntry.associatedCost;
    serviceCatalogEntry.link = apiServiceCatalogEntry.link;
    serviceCatalogEntry.position = apiServiceCatalogEntry.position;
    serviceCatalogEntry.customIcon = apiServiceCatalogEntry.customIcon;
    if (apiServiceCatalogEntry.changeTemplate) serviceCatalogEntry.changeTemplate = ChangeTemplate.fromApiEntity(apiServiceCatalogEntry.changeTemplate);
    if (apiServiceCatalogEntry.purchaseTemplate) serviceCatalogEntry.purchaseTemplate = PurchaseTemplate.fromApiEntity(apiServiceCatalogEntry.purchaseTemplate);
    if (apiServiceCatalogEntry.serviceCatalog) serviceCatalogEntry.serviceCatalog = ServiceCatalog.fromApiEntity(apiServiceCatalogEntry.serviceCatalog);
    if (apiServiceCatalogEntry.parent) serviceCatalogEntry.parent = ServiceCatalogEntry.fromApiEntity(apiServiceCatalogEntry.parent);
    if (apiServiceCatalogEntry.configurationItem) serviceCatalogEntry.configurationItem = ConfigurationItem.fromApiEntity(apiServiceCatalogEntry.configurationItem);

    return serviceCatalogEntry;
  }
}

export default ServiceCatalogEntry;

export type ServiceCatalogEntryType = {
  id: number,
  name: string;
  required: string;
  isRadioButton: string;
  description: string;
  headerTitle: string;
  header: string;
  footerTitle: string;
  footer: string;
  associatedCost: string;
  link: string;
  position: string;
  customIcon: string;
  changeTemplate: ChangeTemplate;
  purchaseTemplate: PurchaseTemplate;
  serviceCatalog: ServiceCatalog;
  parent: ServiceCatalogEntry;
  configurationItem: ConfigurationItem;
}

