//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedPurchase} from '../models/Entities';
//import {ArchivedPurchasePropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedPurchaseLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedPurchaseService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedPurchaseLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedPurchase", data, query, loadSpan, rep, ArchivedPurchase.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedPurchase", data, query, rep, access_token);
  }
}

export default ArchivedPurchaseService;

