//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemRepChatHistory} from '../models/Entities';
//import {ProblemRepChatHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemRepChatHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ProblemRepChatHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemRepChatHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemRepChatHistory", data, query, loadSpan, rep, ProblemRepChatHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemRepChatHistory", data, query, rep, access_token);
  }
}

export default ProblemRepChatHistoryService;

