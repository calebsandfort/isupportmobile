//@flow
import EntityBase from './entityBase';
import {ServiceContractStatusTypes} from './Enums';

export class ServiceContractStatus extends EntityBase {
  label: string;
  position: string;
  eudLabel: string;
  type: ServiceContractStatusTypes;

  static fromApiEntity(apiServiceContractStatus:ServiceContractStatusType): ServiceContractStatus {
    let serviceContractStatus = new ServiceContractStatus();
    serviceContractStatus.id = apiServiceContractStatus.id;
    serviceContractStatus.label = apiServiceContractStatus.label;
    serviceContractStatus.position = apiServiceContractStatus.position;
    serviceContractStatus.eudLabel = apiServiceContractStatus.eudLabel;
    serviceContractStatus.type = ServiceContractStatusTypes.enumOrdinalOf(parseInt(apiServiceContractStatus.type, 10));

    return serviceContractStatus;
  }
}

export default ServiceContractStatus;

export type ServiceContractStatusType = {
  id: number,
  label: string;
  position: string;
  eudLabel: string;
  type: ServiceContractStatusTypes;
}

