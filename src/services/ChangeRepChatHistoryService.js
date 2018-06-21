//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeRepChatHistory} from '../models/Entities';
//import {ChangeRepChatHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeRepChatHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ChangeRepChatHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeRepChatHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeRepChatHistory", data, query, loadSpan, rep, ChangeRepChatHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeRepChatHistory", data, query, rep, access_token);
  }
}

export default ChangeRepChatHistoryService;

