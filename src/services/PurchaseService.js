//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Purchase} from '../models/Entities';
//import {PurchasePropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchase", data, query, loadSpan, rep, Purchase.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchase", data, query, rep, access_token);
  }
}

export default PurchaseService;

