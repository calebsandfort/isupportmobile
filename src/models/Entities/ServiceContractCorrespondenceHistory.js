//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ServiceContractCorrespondenceHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiServiceContractCorrespondenceHistory:ServiceContractCorrespondenceHistoryType): ServiceContractCorrespondenceHistory {
    let serviceContractCorrespondenceHistory = new ServiceContractCorrespondenceHistory();
    serviceContractCorrespondenceHistory.id = apiServiceContractCorrespondenceHistory.id;
    serviceContractCorrespondenceHistory.createdDate = apiServiceContractCorrespondenceHistory.createdDate;
    serviceContractCorrespondenceHistory.entry = apiServiceContractCorrespondenceHistory.entry;
    if (apiServiceContractCorrespondenceHistory.owner) serviceContractCorrespondenceHistory.owner = SupportRepresentative.fromApiEntity(apiServiceContractCorrespondenceHistory.owner);

    return serviceContractCorrespondenceHistory;
  }
}

export default ServiceContractCorrespondenceHistory;

export type ServiceContractCorrespondenceHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

