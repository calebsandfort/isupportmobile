//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {OpportunityRepChatHistory} from '../models/Entities';
//import {OpportunityRepChatHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {OpportunityRepChatHistoryLoadSpan} from '../models/Entities/LoadSpans';

class OpportunityRepChatHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?OpportunityRepChatHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("opportunityRepChatHistory", data, query, loadSpan, rep, OpportunityRepChatHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("opportunityRepChatHistory", data, query, rep, access_token);
  }
}

export default OpportunityRepChatHistoryService;

