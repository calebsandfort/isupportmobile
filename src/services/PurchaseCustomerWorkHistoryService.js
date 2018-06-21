//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseCustomerWorkHistory} from '../models/Entities';
//import {PurchaseCustomerWorkHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseCustomerWorkHistoryLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseCustomerWorkHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseCustomerWorkHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseCustomerWorkHistory", data, query, loadSpan, rep, PurchaseCustomerWorkHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseCustomerWorkHistory", data, query, rep, access_token);
  }
}

export default PurchaseCustomerWorkHistoryService;

