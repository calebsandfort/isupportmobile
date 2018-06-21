//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ServiceContractAuditHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiServiceContractAuditHistory:ServiceContractAuditHistoryType): ServiceContractAuditHistory {
    let serviceContractAuditHistory = new ServiceContractAuditHistory();
    serviceContractAuditHistory.id = apiServiceContractAuditHistory.id;
    serviceContractAuditHistory.createdDate = apiServiceContractAuditHistory.createdDate;
    serviceContractAuditHistory.entry = apiServiceContractAuditHistory.entry;
    if (apiServiceContractAuditHistory.owner) serviceContractAuditHistory.owner = SupportRepresentative.fromApiEntity(apiServiceContractAuditHistory.owner);

    return serviceContractAuditHistory;
  }
}

export default ServiceContractAuditHistory;

export type ServiceContractAuditHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

