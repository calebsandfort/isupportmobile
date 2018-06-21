//@flow
import EntityBase from './entityBase';
import ServiceContractStatus from './ServiceContractStatus';
import {ServiceContractType} from './Enums';
import {DurationCountType} from './Enums';

export class ServiceContract extends EntityBase {
  guid: string;
  number: string;
  customNumber: string;
  comments: string;
  usedCount: string;
  durationCount: string;
  durationStart: string;
  durationEnd: string;
  name: string;
  createdDate: string;
  contractType: ServiceContractType;
  durationCountType: DurationCountType;
  status: ServiceContractStatus;

  static fromApiEntity(apiServiceContract:ServiceContractEntityType): ServiceContract {
    let serviceContract = new ServiceContract();
    serviceContract.id = apiServiceContract.id;
    serviceContract.guid = apiServiceContract.guid;
    serviceContract.number = apiServiceContract.number;
    serviceContract.customNumber = apiServiceContract.customNumber;
    serviceContract.comments = apiServiceContract.comments;
    serviceContract.usedCount = apiServiceContract.usedCount;
    serviceContract.durationCount = apiServiceContract.durationCount;
    serviceContract.durationStart = apiServiceContract.durationStart;
    serviceContract.durationEnd = apiServiceContract.durationEnd;
    serviceContract.name = apiServiceContract.name;
    serviceContract.createdDate = apiServiceContract.createdDate;
    serviceContract.contractType = ServiceContractType.enumOrdinalOf(parseInt(apiServiceContract.contractType, 10));
    serviceContract.durationCountType = DurationCountType.enumOrdinalOf(parseInt(apiServiceContract.durationCountType, 10));
    if (apiServiceContract.status) serviceContract.status = ServiceContractStatus.fromApiEntity(apiServiceContract.status);

    return serviceContract;
  }
}

export default ServiceContract;

export type ServiceContractEntityType = {
  id: number,
  guid: string;
  number: string;
  customNumber: string;
  comments: string;
  usedCount: string;
  durationCount: string;
  durationStart: string;
  durationEnd: string;
  name: string;
  createdDate: string;
  contractType: ServiceContractType;
  durationCountType: DurationCountType;
  status: ServiceContractStatus;
}
