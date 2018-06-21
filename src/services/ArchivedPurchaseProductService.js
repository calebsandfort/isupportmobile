//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedPurchaseProduct} from '../models/Entities';
//import {ArchivedPurchaseProductPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedPurchaseProductLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedPurchaseProductService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedPurchaseProductLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedPurchaseProduct", data, query, loadSpan, rep, ArchivedPurchaseProduct.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedPurchaseProduct", data, query, rep, access_token);
  }
}

export default ArchivedPurchaseProductService;

