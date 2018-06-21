//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class IncidentAuditHistory extends EntityBase {
  createdDate: string;
  entry: string;
  incidentNumber: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiIncidentAuditHistory:IncidentAuditHistoryType): IncidentAuditHistory {
    let incidentAuditHistory = new IncidentAuditHistory();
    incidentAuditHistory.id = apiIncidentAuditHistory.id;
    incidentAuditHistory.createdDate = apiIncidentAuditHistory.createdDate;
    incidentAuditHistory.entry = apiIncidentAuditHistory.entry;
    incidentAuditHistory.incidentNumber = apiIncidentAuditHistory.incidentNumber;
    if (apiIncidentAuditHistory.owner) incidentAuditHistory.owner = SupportRepresentative.fromApiEntity(apiIncidentAuditHistory.owner);
    if (apiIncidentAuditHistory.customerOwner) incidentAuditHistory.customerOwner = Customer.fromApiEntity(apiIncidentAuditHistory.customerOwner);

    return incidentAuditHistory;
  }
}

export default IncidentAuditHistory;

export type IncidentAuditHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  incidentNumber: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

