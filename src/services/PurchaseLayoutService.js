//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseLayout} from '../models/Entities';
//import {PurchaseLayoutPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseLayoutLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseLayoutService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseLayoutLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseLayout", data, query, loadSpan, rep, PurchaseLayout.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseLayout", data, query, rep, access_token);
  }
}

export default PurchaseLayoutService;

