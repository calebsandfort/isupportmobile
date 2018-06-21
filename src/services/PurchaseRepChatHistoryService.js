//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseRepChatHistory} from '../models/Entities';
//import {PurchaseRepChatHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseRepChatHistoryLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseRepChatHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseRepChatHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseRepChatHistory", data, query, loadSpan, rep, PurchaseRepChatHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseRepChatHistory", data, query, rep, access_token);
  }
}

export default PurchaseRepChatHistoryService;

