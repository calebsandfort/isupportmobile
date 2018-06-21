//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseStatus} from '../models/Entities';
//import {PurchaseStatusPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseStatusLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseStatusService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseStatusLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseStatus", data, query, loadSpan, rep, PurchaseStatus.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseStatus", data, query, rep, access_token);
  }
}

export default PurchaseStatusService;

