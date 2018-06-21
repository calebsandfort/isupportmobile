//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedPurchaseAsset} from '../models/Entities';
//import {ArchivedPurchaseAssetPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedPurchaseAssetLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedPurchaseAssetService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedPurchaseAssetLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedPurchaseAsset", data, query, loadSpan, rep, ArchivedPurchaseAsset.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedPurchaseAsset", data, query, rep, access_token);
  }
}

export default ArchivedPurchaseAssetService;

