//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';
import AccessCircle from './AccessCircle';

export class MySupportCalendar extends EntityBase {
  name: string;
  repOwner: SupportRepresentative;
  customerOwner: Customer;
  accessCircle: AccessCircle;
  editAccessCircle: AccessCircle;

  static fromApiEntity(apiMySupportCalendar:MySupportCalendarType): MySupportCalendar {
    let mySupportCalendar = new MySupportCalendar();
    mySupportCalendar.id = apiMySupportCalendar.id;
    mySupportCalendar.name = apiMySupportCalendar.name;
    if (apiMySupportCalendar.repOwner) mySupportCalendar.repOwner = SupportRepresentative.fromApiEntity(apiMySupportCalendar.repOwner);
    if (apiMySupportCalendar.customerOwner) mySupportCalendar.customerOwner = Customer.fromApiEntity(apiMySupportCalendar.customerOwner);
    if (apiMySupportCalendar.accessCircle) mySupportCalendar.accessCircle = AccessCircle.fromApiEntity(apiMySupportCalendar.accessCircle);
    if (apiMySupportCalendar.editAccessCircle) mySupportCalendar.editAccessCircle = AccessCircle.fromApiEntity(apiMySupportCalendar.editAccessCircle);

    return mySupportCalendar;
  }
}

export default MySupportCalendar;

export type MySupportCalendarType = {
  id: number,
  name: string;
  repOwner: SupportRepresentative;
  customerOwner: Customer;
  accessCircle: AccessCircle;
  editAccessCircle: AccessCircle;
}

