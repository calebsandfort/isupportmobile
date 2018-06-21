//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AssetDeletionShadow} from '../models/Entities';
//import {AssetDeletionShadowPropertyNames} from '../models/Entities/PropertyNames';
import {AssetDeletionShadowLoadSpan} from '../models/Entities/LoadSpans';

class AssetDeletionShadowService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AssetDeletionShadowLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("assetDeletionShadow", data, query, loadSpan, rep, AssetDeletionShadow.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("assetDeletionShadow", data, query, rep, access_token);
  }
}

export default AssetDeletionShadowService;

