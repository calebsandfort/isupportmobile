//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';

class LinkedOpenIdAccountPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get accountId (): string {
    return super.resolvePropertyName("AccountId");
  }
  get type (): string {
    return super.resolvePropertyName("Type");
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
}

export default LinkedOpenIdAccountPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
