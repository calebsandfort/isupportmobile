//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AssetAuditHistory} from '../models/Entities';
//import {AssetAuditHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {AssetAuditHistoryLoadSpan} from '../models/Entities/LoadSpans';

class AssetAuditHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AssetAuditHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("assetAuditHistory", data, query, loadSpan, rep, AssetAuditHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("assetAuditHistory", data, query, rep, access_token);
  }
}

export default AssetAuditHistoryService;

