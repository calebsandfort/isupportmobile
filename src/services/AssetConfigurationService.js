//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AssetConfiguration} from '../models/Entities';
//import {AssetConfigurationPropertyNames} from '../models/Entities/PropertyNames';
import {AssetConfigurationLoadSpan} from '../models/Entities/LoadSpans';

class AssetConfigurationService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AssetConfigurationLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("assetConfiguration", data, query, loadSpan, rep, AssetConfiguration.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("assetConfiguration", data, query, rep, access_token);
  }
}

export default AssetConfigurationService;

