//@flow
import EntityBase from './entityBase';
import Change from './Change';
import Purchase from './Purchase';
import ServiceCatalog from './ServiceCatalog';
import ConfigurationItem from './ConfigurationItem';
import ChangeTemplate from './ChangeTemplate';
import PurchaseTemplate from './PurchaseTemplate';
import ServiceCatalogEntry from './ServiceCatalogEntry';

export class BuiltServiceCatalogEntry extends EntityBase {
  name: string;
  associatedCost: string;
  isPlaceHolder: string;
  selectedTemplateProductIds: string;
  link: string;
  change: Change;
  purchase: Purchase;
  serviceCatalog: ServiceCatalog;
  parent: BuiltServiceCatalogEntry;
  configurationItem: ConfigurationItem;
  changeTemplate: ChangeTemplate;
  purchaseTemplate: PurchaseTemplate;
  serviceCatalogEntry: ServiceCatalogEntry;

  static fromApiEntity(apiBuiltServiceCatalogEntry:BuiltServiceCatalogEntryType): BuiltServiceCatalogEntry {
    let builtServiceCatalogEntry = new BuiltServiceCatalogEntry();
    builtServiceCatalogEntry.id = apiBuiltServiceCatalogEntry.id;
    builtServiceCatalogEntry.name = apiBuiltServiceCatalogEntry.name;
    builtServiceCatalogEntry.associatedCost = apiBuiltServiceCatalogEntry.associatedCost;
    builtServiceCatalogEntry.isPlaceHolder = apiBuiltServiceCatalogEntry.isPlaceHolder;
    builtServiceCatalogEntry.selectedTemplateProductIds = apiBuiltServiceCatalogEntry.selectedTemplateProductIds;
    builtServiceCatalogEntry.link = apiBuiltServiceCatalogEntry.link;
    if (apiBuiltServiceCatalogEntry.change) builtServiceCatalogEntry.change = Change.fromApiEntity(apiBuiltServiceCatalogEntry.change);
    if (apiBuiltServiceCatalogEntry.purchase) builtServiceCatalogEntry.purchase = Purchase.fromApiEntity(apiBuiltServiceCatalogEntry.purchase);
    if (apiBuiltServiceCatalogEntry.serviceCatalog) builtServiceCatalogEntry.serviceCatalog = ServiceCatalog.fromApiEntity(apiBuiltServiceCatalogEntry.serviceCatalog);
    if (apiBuiltServiceCatalogEntry.parent) builtServiceCatalogEntry.parent = BuiltServiceCatalogEntry.fromApiEntity(apiBuiltServiceCatalogEntry.parent);
    if (apiBuiltServiceCatalogEntry.configurationItem) builtServiceCatalogEntry.configurationItem = ConfigurationItem.fromApiEntity(apiBuiltServiceCatalogEntry.configurationItem);
    if (apiBuiltServiceCatalogEntry.changeTemplate) builtServiceCatalogEntry.changeTemplate = ChangeTemplate.fromApiEntity(apiBuiltServiceCatalogEntry.changeTemplate);
    if (apiBuiltServiceCatalogEntry.purchaseTemplate) builtServiceCatalogEntry.purchaseTemplate = PurchaseTemplate.fromApiEntity(apiBuiltServiceCatalogEntry.purchaseTemplate);
    if (apiBuiltServiceCatalogEntry.serviceCatalogEntry) builtServiceCatalogEntry.serviceCatalogEntry = ServiceCatalogEntry.fromApiEntity(apiBuiltServiceCatalogEntry.serviceCatalogEntry);

    return builtServiceCatalogEntry;
  }
}

export default BuiltServiceCatalogEntry;

export type BuiltServiceCatalogEntryType = {
  id: number,
  name: string;
  associatedCost: string;
  isPlaceHolder: string;
  selectedTemplateProductIds: string;
  link: string;
  change: Change;
  purchase: Purchase;
  serviceCatalog: ServiceCatalog;
  parent: BuiltServiceCatalogEntry;
  configurationItem: ConfigurationItem;
  changeTemplate: ChangeTemplate;
  purchaseTemplate: PurchaseTemplate;
  serviceCatalogEntry: ServiceCatalogEntry;
}

