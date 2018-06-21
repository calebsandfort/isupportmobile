//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AssetType} from '../models/Entities';
//import {AssetTypePropertyNames} from '../models/Entities/PropertyNames';
import {AssetTypeLoadSpan} from '../models/Entities/LoadSpans';

class AssetTypeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AssetTypeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("assetType", data, query, loadSpan, rep, AssetType.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("assetType", data, query, rep, access_token);
  }
}

export default AssetTypeService;

