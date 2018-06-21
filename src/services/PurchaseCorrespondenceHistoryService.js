//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseCorrespondenceHistory} from '../models/Entities';
//import {PurchaseCorrespondenceHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseCorrespondenceHistoryLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseCorrespondenceHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseCorrespondenceHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseCorrespondenceHistory", data, query, loadSpan, rep, PurchaseCorrespondenceHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseCorrespondenceHistory", data, query, rep, access_token);
  }
}

export default PurchaseCorrespondenceHistoryService;

