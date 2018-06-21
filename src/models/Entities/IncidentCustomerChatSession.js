//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import SupportRepresentative from './SupportRepresentative';
import Incident from './Incident';

export class IncidentCustomerChatSession extends EntityBase {
  customer: Customer;
  rep: SupportRepresentative;
  incident: Incident;

  static fromApiEntity(apiIncidentCustomerChatSession:IncidentCustomerChatSessionType): IncidentCustomerChatSession {
    let incidentCustomerChatSession = new IncidentCustomerChatSession();
    incidentCustomerChatSession.id = apiIncidentCustomerChatSession.id;
    if (apiIncidentCustomerChatSession.customer) incidentCustomerChatSession.customer = Customer.fromApiEntity(apiIncidentCustomerChatSession.customer);
    if (apiIncidentCustomerChatSession.rep) incidentCustomerChatSession.rep = SupportRepresentative.fromApiEntity(apiIncidentCustomerChatSession.rep);
    if (apiIncidentCustomerChatSession.incident) incidentCustomerChatSession.incident = Incident.fromApiEntity(apiIncidentCustomerChatSession.incident);

    return incidentCustomerChatSession;
  }
}

export default IncidentCustomerChatSession;

export type IncidentCustomerChatSessionType = {
  id: number,
  customer: Customer;
  rep: SupportRepresentative;
  incident: Incident;
}

