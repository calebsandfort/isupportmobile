//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseAuditHistory} from '../models/Entities';
//import {PurchaseAuditHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseAuditHistoryLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseAuditHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseAuditHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseAuditHistory", data, query, loadSpan, rep, PurchaseAuditHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseAuditHistory", data, query, rep, access_token);
  }
}

export default PurchaseAuditHistoryService;

