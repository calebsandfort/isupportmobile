//@flow
import EntityBase from './entityBase';
import Tutorial from './Tutorial';

export class ServiceContractLayout extends EntityBase {
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;

  static fromApiEntity(apiServiceContractLayout:ServiceContractLayoutType): ServiceContractLayout {
    let serviceContractLayout = new ServiceContractLayout();
    serviceContractLayout.id = apiServiceContractLayout.id;
    serviceContractLayout.detailsLayout = apiServiceContractLayout.detailsLayout;
    serviceContractLayout.tabLayout = apiServiceContractLayout.tabLayout;
    if (apiServiceContractLayout.tutorial) serviceContractLayout.tutorial = Tutorial.fromApiEntity(apiServiceContractLayout.tutorial);

    return serviceContractLayout;
  }
}

export default ServiceContractLayout;

export type ServiceContractLayoutType = {
  id: number,
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;
}

