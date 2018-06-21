//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class IncidentApprovalHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiIncidentApprovalHistory:IncidentApprovalHistoryType): IncidentApprovalHistory {
    let incidentApprovalHistory = new IncidentApprovalHistory();
    incidentApprovalHistory.id = apiIncidentApprovalHistory.id;
    incidentApprovalHistory.createdDate = apiIncidentApprovalHistory.createdDate;
    incidentApprovalHistory.entry = apiIncidentApprovalHistory.entry;
    if (apiIncidentApprovalHistory.owner) incidentApprovalHistory.owner = SupportRepresentative.fromApiEntity(apiIncidentApprovalHistory.owner);
    if (apiIncidentApprovalHistory.customerOwner) incidentApprovalHistory.customerOwner = Customer.fromApiEntity(apiIncidentApprovalHistory.customerOwner);

    return incidentApprovalHistory;
  }
}

export default IncidentApprovalHistory;

export type IncidentApprovalHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

