//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AssetRDBIntegrationDefinition} from '../models/Entities';
//import {AssetRDBIntegrationDefinitionPropertyNames} from '../models/Entities/PropertyNames';
import {AssetRDBIntegrationDefinitionLoadSpan} from '../models/Entities/LoadSpans';

class AssetRDBIntegrationDefinitionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AssetRDBIntegrationDefinitionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("assetRDBIntegrationDefinition", data, query, loadSpan, rep, AssetRDBIntegrationDefinition.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("assetRDBIntegrationDefinition", data, query, rep, access_token);
  }
}

export default AssetRDBIntegrationDefinitionService;

