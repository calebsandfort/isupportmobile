//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {InventoryAsset} from '../models/Entities';
//import {InventoryAssetPropertyNames} from '../models/Entities/PropertyNames';
import {InventoryAssetLoadSpan} from '../models/Entities/LoadSpans';

class InventoryAssetService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?InventoryAssetLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("inventoryAsset", data, query, loadSpan, rep, InventoryAsset.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("inventoryAsset", data, query, rep, access_token);
  }
}

export default InventoryAssetService;

