//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class IncidentRepChatHistory extends EntityBase {
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;

  static fromApiEntity(apiIncidentRepChatHistory:IncidentRepChatHistoryType): IncidentRepChatHistory {
    let incidentRepChatHistory = new IncidentRepChatHistory();
    incidentRepChatHistory.id = apiIncidentRepChatHistory.id;
    incidentRepChatHistory.createdDate = apiIncidentRepChatHistory.createdDate;
    incidentRepChatHistory.entry = apiIncidentRepChatHistory.entry;
    incidentRepChatHistory.isFromSystem = apiIncidentRepChatHistory.isFromSystem;
    if (apiIncidentRepChatHistory.owner) incidentRepChatHistory.owner = SupportRepresentative.fromApiEntity(apiIncidentRepChatHistory.owner);
    if (apiIncidentRepChatHistory.recipient) incidentRepChatHistory.recipient = SupportRepresentative.fromApiEntity(apiIncidentRepChatHistory.recipient);

    return incidentRepChatHistory;
  }
}

export default IncidentRepChatHistory;

export type IncidentRepChatHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;
}

