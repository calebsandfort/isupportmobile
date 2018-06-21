//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseProduct} from '../models/Entities';
//import {PurchaseProductPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseProductLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseProductService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseProductLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseProduct", data, query, loadSpan, rep, PurchaseProduct.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseProduct", data, query, rep, access_token);
  }
}

export default PurchaseProductService;

