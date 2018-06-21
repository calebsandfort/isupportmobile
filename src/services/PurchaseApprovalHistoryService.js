//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseApprovalHistory} from '../models/Entities';
//import {PurchaseApprovalHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseApprovalHistoryLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseApprovalHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseApprovalHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseApprovalHistory", data, query, loadSpan, rep, PurchaseApprovalHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseApprovalHistory", data, query, rep, access_token);
  }
}

export default PurchaseApprovalHistoryService;

