//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseDeletionShadow} from '../models/Entities';
//import {PurchaseDeletionShadowPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseDeletionShadowLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseDeletionShadowService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseDeletionShadowLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseDeletionShadow", data, query, loadSpan, rep, PurchaseDeletionShadow.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseDeletionShadow", data, query, rep, access_token);
  }
}

export default PurchaseDeletionShadowService;

