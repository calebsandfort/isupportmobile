//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import SupportRepresentative from './SupportRepresentative';
import IncidentCustomerChatSession from './IncidentCustomerChatSession';

export class IncidentCustomerChatHistory extends EntityBase {
  createdDate: string;
  entry: string;
  incidentNumber: string;
  repIsSender: string;
  isFromSystem: string;
  customer: Customer;
  rep: SupportRepresentative;
  session: IncidentCustomerChatSession;

  static fromApiEntity(apiIncidentCustomerChatHistory:IncidentCustomerChatHistoryType): IncidentCustomerChatHistory {
    let incidentCustomerChatHistory = new IncidentCustomerChatHistory();
    incidentCustomerChatHistory.id = apiIncidentCustomerChatHistory.id;
    incidentCustomerChatHistory.createdDate = apiIncidentCustomerChatHistory.createdDate;
    incidentCustomerChatHistory.entry = apiIncidentCustomerChatHistory.entry;
    incidentCustomerChatHistory.incidentNumber = apiIncidentCustomerChatHistory.incidentNumber;
    incidentCustomerChatHistory.repIsSender = apiIncidentCustomerChatHistory.repIsSender;
    incidentCustomerChatHistory.isFromSystem = apiIncidentCustomerChatHistory.isFromSystem;
    if (apiIncidentCustomerChatHistory.customer) incidentCustomerChatHistory.customer = Customer.fromApiEntity(apiIncidentCustomerChatHistory.customer);
    if (apiIncidentCustomerChatHistory.rep) incidentCustomerChatHistory.rep = SupportRepresentative.fromApiEntity(apiIncidentCustomerChatHistory.rep);
    if (apiIncidentCustomerChatHistory.session) incidentCustomerChatHistory.session = IncidentCustomerChatSession.fromApiEntity(apiIncidentCustomerChatHistory.session);

    return incidentCustomerChatHistory;
  }
}

export default IncidentCustomerChatHistory;

export type IncidentCustomerChatHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  incidentNumber: string;
  repIsSender: string;
  isFromSystem: string;
  customer: Customer;
  rep: SupportRepresentative;
  session: IncidentCustomerChatSession;
}

