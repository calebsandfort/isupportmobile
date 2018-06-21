//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CorrespondenceCampaignMessage} from '../models/Entities';
//import {CorrespondenceCampaignMessagePropertyNames} from '../models/Entities/PropertyNames';
import {CorrespondenceCampaignMessageLoadSpan} from '../models/Entities/LoadSpans';

class CorrespondenceCampaignMessageService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CorrespondenceCampaignMessageLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("correspondenceCampaignMessage", data, query, loadSpan, rep, CorrespondenceCampaignMessage.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("correspondenceCampaignMessage", data, query, rep, access_token);
  }
}

export default CorrespondenceCampaignMessageService;

