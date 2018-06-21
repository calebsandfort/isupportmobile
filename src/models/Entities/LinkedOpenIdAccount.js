//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import {OpenIdAccountType} from './Enums';

export class LinkedOpenIdAccount extends EntityBase {
  name: string;
  accountId: string;
  type: OpenIdAccountType;
  customer: Customer;

  static fromApiEntity(apiLinkedOpenIdAccount:LinkedOpenIdAccountType): LinkedOpenIdAccount {
    let linkedOpenIdAccount = new LinkedOpenIdAccount();
    linkedOpenIdAccount.id = apiLinkedOpenIdAccount.id;
    linkedOpenIdAccount.name = apiLinkedOpenIdAccount.name;
    linkedOpenIdAccount.accountId = apiLinkedOpenIdAccount.accountId;
    linkedOpenIdAccount.type = OpenIdAccountType.enumOrdinalOf(parseInt(apiLinkedOpenIdAccount.type, 10));
    if (apiLinkedOpenIdAccount.customer) linkedOpenIdAccount.customer = Customer.fromApiEntity(apiLinkedOpenIdAccount.customer);

    return linkedOpenIdAccount;
  }
}

export default LinkedOpenIdAccount;

export type LinkedOpenIdAccountType = {
  id: number,
  name: string;
  accountId: string;
  type: OpenIdAccountType;
  customer: Customer;
}

