//@flow
import EntityBase from './entityBase';
import Tutorial from './Tutorial';

export class CustomerLayout extends EntityBase {
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;

  static fromApiEntity(apiCustomerLayout:CustomerLayoutType): CustomerLayout {
    let customerLayout = new CustomerLayout();
    customerLayout.id = apiCustomerLayout.id;
    customerLayout.detailsLayout = apiCustomerLayout.detailsLayout;
    customerLayout.tabLayout = apiCustomerLayout.tabLayout;
    if (apiCustomerLayout.tutorial) customerLayout.tutorial = Tutorial.fromApiEntity(apiCustomerLayout.tutorial);

    return customerLayout;
  }
}

export default CustomerLayout;

export type CustomerLayoutType = {
  id: number,
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;
}

