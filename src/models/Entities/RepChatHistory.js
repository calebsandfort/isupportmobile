//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class RepChatHistory extends EntityBase {
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;

  static fromApiEntity(apiRepChatHistory:RepChatHistoryType): RepChatHistory {
    let repChatHistory = new RepChatHistory();
    repChatHistory.id = apiRepChatHistory.id;
    repChatHistory.createdDate = apiRepChatHistory.createdDate;
    repChatHistory.entry = apiRepChatHistory.entry;
    repChatHistory.isFromSystem = apiRepChatHistory.isFromSystem;
    if (apiRepChatHistory.owner) repChatHistory.owner = SupportRepresentative.fromApiEntity(apiRepChatHistory.owner);
    if (apiRepChatHistory.recipient) repChatHistory.recipient = SupportRepresentative.fromApiEntity(apiRepChatHistory.recipient);

    return repChatHistory;
  }
}

export default RepChatHistory;

export type RepChatHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;
}

