//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ProblemRepChatHistory extends EntityBase {
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;

  static fromApiEntity(apiProblemRepChatHistory:ProblemRepChatHistoryType): ProblemRepChatHistory {
    let problemRepChatHistory = new ProblemRepChatHistory();
    problemRepChatHistory.id = apiProblemRepChatHistory.id;
    problemRepChatHistory.createdDate = apiProblemRepChatHistory.createdDate;
    problemRepChatHistory.entry = apiProblemRepChatHistory.entry;
    problemRepChatHistory.isFromSystem = apiProblemRepChatHistory.isFromSystem;
    if (apiProblemRepChatHistory.owner) problemRepChatHistory.owner = SupportRepresentative.fromApiEntity(apiProblemRepChatHistory.owner);
    if (apiProblemRepChatHistory.recipient) problemRepChatHistory.recipient = SupportRepresentative.fromApiEntity(apiProblemRepChatHistory.recipient);

    return problemRepChatHistory;
  }
}

export default ProblemRepChatHistory;

export type ProblemRepChatHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;
}

