//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ServiceContractStatusPropertyNames from './ServiceContractStatusPropertyNames';

class ServiceContractPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get guid (): string {
    return super.resolvePropertyName("Guid");
  }
  get number (): string {
    return super.resolvePropertyName("Number");
  }
  get customNumber (): string {
    return super.resolvePropertyName("CustomNumber");
  }
  get comments (): string {
    return super.resolvePropertyName("Comments");
  }
  get usedCount (): string {
    return super.resolvePropertyName("UsedCount");
  }
  get durationCount (): string {
    return super.resolvePropertyName("DurationCount");
  }
  get durationStart (): string {
    return super.resolvePropertyName("DurationStart");
  }
  get durationEnd (): string {
    return super.resolvePropertyName("DurationEnd");
  }
  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get contractType (): string {
    return super.resolvePropertyName("ContractType");
  }
  get durationCountType (): string {
    return super.resolvePropertyName("DurationCountType");
  }
  get status (): ServiceContractStatusPropertyNames {
    return new ServiceContractStatusPropertyNames(super.resolvePropertyName("Status"));
  }
}

export default ServiceContractPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
