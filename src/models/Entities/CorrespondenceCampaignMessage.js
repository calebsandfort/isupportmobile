//@flow
import EntityBase from './entityBase';
import Correspondence from './Correspondence';
import {CorrespondenceCampaignResultTypes} from './Enums';

export class CorrespondenceCampaignMessage extends EntityBase {
  result: CorrespondenceCampaignResultTypes;
  correspondence: Correspondence;

  static fromApiEntity(apiCorrespondenceCampaignMessage:CorrespondenceCampaignMessageType): CorrespondenceCampaignMessage {
    let correspondenceCampaignMessage = new CorrespondenceCampaignMessage();
    correspondenceCampaignMessage.id = apiCorrespondenceCampaignMessage.id;
    correspondenceCampaignMessage.result = CorrespondenceCampaignResultTypes.enumOrdinalOf(parseInt(apiCorrespondenceCampaignMessage.result, 10));
    if (apiCorrespondenceCampaignMessage.correspondence) correspondenceCampaignMessage.correspondence = Correspondence.fromApiEntity(apiCorrespondenceCampaignMessage.correspondence);

    return correspondenceCampaignMessage;
  }
}

export default CorrespondenceCampaignMessage;

export type CorrespondenceCampaignMessageType = {
  id: number,
  result: CorrespondenceCampaignResultTypes;
  correspondence: Correspondence;
}

