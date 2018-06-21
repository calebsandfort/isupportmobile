//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';
import Tutorial from './Tutorial';

export class MySupportDashboard extends EntityBase {
  name: string;
  description: string;
  json: string;
  repOwner: SupportRepresentative;
  customerOwner: Customer;
  tutorial: Tutorial;

  static fromApiEntity(apiMySupportDashboard:MySupportDashboardType): MySupportDashboard {
    let mySupportDashboard = new MySupportDashboard();
    mySupportDashboard.id = apiMySupportDashboard.id;
    mySupportDashboard.name = apiMySupportDashboard.name;
    mySupportDashboard.description = apiMySupportDashboard.description;
    mySupportDashboard.json = apiMySupportDashboard.json;
    if (apiMySupportDashboard.repOwner) mySupportDashboard.repOwner = SupportRepresentative.fromApiEntity(apiMySupportDashboard.repOwner);
    if (apiMySupportDashboard.customerOwner) mySupportDashboard.customerOwner = Customer.fromApiEntity(apiMySupportDashboard.customerOwner);
    if (apiMySupportDashboard.tutorial) mySupportDashboard.tutorial = Tutorial.fromApiEntity(apiMySupportDashboard.tutorial);

    return mySupportDashboard;
  }
}

export default MySupportDashboard;

export type MySupportDashboardType = {
  id: number,
  name: string;
  description: string;
  json: string;
  repOwner: SupportRepresentative;
  customerOwner: Customer;
  tutorial: Tutorial;
}

