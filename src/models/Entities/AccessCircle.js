//@flow
import EntityBase from './entityBase';

export class AccessCircle extends EntityBase {
  name: string;
  allCustomers: string;
  allReps: string;
  allCustomerGroups: string;
  allRepGroups: string;

  static fromApiEntity(apiAccessCircle:AccessCircleType): AccessCircle {
    let accessCircle = new AccessCircle();
    accessCircle.id = apiAccessCircle.id;
    accessCircle.name = apiAccessCircle.name;
    accessCircle.allCustomers = apiAccessCircle.allCustomers;
    accessCircle.allReps = apiAccessCircle.allReps;
    accessCircle.allCustomerGroups = apiAccessCircle.allCustomerGroups;
    accessCircle.allRepGroups = apiAccessCircle.allRepGroups;

    return accessCircle;
  }
}

export default AccessCircle;

export type AccessCircleType = {
  id: number,
  name: string;
  allCustomers: string;
  allReps: string;
  allCustomerGroups: string;
  allRepGroups: string;
}

