//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {RepChatHistory} from '../models/Entities';
//import {RepChatHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {RepChatHistoryLoadSpan} from '../models/Entities/LoadSpans';

class RepChatHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?RepChatHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("repChatHistory", data, query, loadSpan, rep, RepChatHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("repChatHistory", data, query, rep, access_token);
  }
}

export default RepChatHistoryService;

