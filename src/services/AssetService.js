//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Asset} from '../models/Entities';
//import {AssetPropertyNames} from '../models/Entities/PropertyNames';
import {AssetLoadSpan} from '../models/Entities/LoadSpans';

class AssetService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AssetLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("asset", data, query, loadSpan, rep, Asset.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("asset", data, query, rep, access_token);
  }
}

export default AssetService;

