//@flow
import EntityBase from './entityBase';

export class ServiceCatalog extends EntityBase {
  name: string;
  position: string;
  customIcon: string;

  static fromApiEntity(apiServiceCatalog:ServiceCatalogType): ServiceCatalog {
    let serviceCatalog = new ServiceCatalog();
    serviceCatalog.id = apiServiceCatalog.id;
    serviceCatalog.name = apiServiceCatalog.name;
    serviceCatalog.position = apiServiceCatalog.position;
    serviceCatalog.customIcon = apiServiceCatalog.customIcon;

    return serviceCatalog;
  }
}

export default ServiceCatalog;

export type ServiceCatalogType = {
  id: number,
  name: string;
  position: string;
  customIcon: string;
}

