//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ChangeRepChatHistory extends EntityBase {
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;

  static fromApiEntity(apiChangeRepChatHistory:ChangeRepChatHistoryType): ChangeRepChatHistory {
    let changeRepChatHistory = new ChangeRepChatHistory();
    changeRepChatHistory.id = apiChangeRepChatHistory.id;
    changeRepChatHistory.createdDate = apiChangeRepChatHistory.createdDate;
    changeRepChatHistory.entry = apiChangeRepChatHistory.entry;
    changeRepChatHistory.isFromSystem = apiChangeRepChatHistory.isFromSystem;
    if (apiChangeRepChatHistory.owner) changeRepChatHistory.owner = SupportRepresentative.fromApiEntity(apiChangeRepChatHistory.owner);
    if (apiChangeRepChatHistory.recipient) changeRepChatHistory.recipient = SupportRepresentative.fromApiEntity(apiChangeRepChatHistory.recipient);

    return changeRepChatHistory;
  }
}

export default ChangeRepChatHistory;

export type ChangeRepChatHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;
}

