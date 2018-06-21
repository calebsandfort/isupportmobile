//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseRuleGroupHistory} from '../models/Entities';
//import {PurchaseRuleGroupHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseRuleGroupHistoryLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseRuleGroupHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseRuleGroupHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseRuleGroupHistory", data, query, loadSpan, rep, PurchaseRuleGroupHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseRuleGroupHistory", data, query, rep, access_token);
  }
}

export default PurchaseRuleGroupHistoryService;

