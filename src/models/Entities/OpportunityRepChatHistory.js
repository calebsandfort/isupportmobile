//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class OpportunityRepChatHistory extends EntityBase {
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;

  static fromApiEntity(apiOpportunityRepChatHistory:OpportunityRepChatHistoryType): OpportunityRepChatHistory {
    let opportunityRepChatHistory = new OpportunityRepChatHistory();
    opportunityRepChatHistory.id = apiOpportunityRepChatHistory.id;
    opportunityRepChatHistory.createdDate = apiOpportunityRepChatHistory.createdDate;
    opportunityRepChatHistory.entry = apiOpportunityRepChatHistory.entry;
    opportunityRepChatHistory.isFromSystem = apiOpportunityRepChatHistory.isFromSystem;
    if (apiOpportunityRepChatHistory.owner) opportunityRepChatHistory.owner = SupportRepresentative.fromApiEntity(apiOpportunityRepChatHistory.owner);
    if (apiOpportunityRepChatHistory.recipient) opportunityRepChatHistory.recipient = SupportRepresentative.fromApiEntity(apiOpportunityRepChatHistory.recipient);

    return opportunityRepChatHistory;
  }
}

export default OpportunityRepChatHistory;

export type OpportunityRepChatHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;
}

