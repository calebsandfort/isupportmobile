//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedPurchaseCorrespondence} from '../models/Entities';
//import {ArchivedPurchaseCorrespondencePropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedPurchaseCorrespondenceLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedPurchaseCorrespondenceService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedPurchaseCorrespondenceLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedPurchaseCorrespondence", data, query, loadSpan, rep, ArchivedPurchaseCorrespondence.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedPurchaseCorrespondence", data, query, rep, access_token);
  }
}

export default ArchivedPurchaseCorrespondenceService;

