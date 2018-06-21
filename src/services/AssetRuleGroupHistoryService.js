//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AssetRuleGroupHistory} from '../models/Entities';
//import {AssetRuleGroupHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {AssetRuleGroupHistoryLoadSpan} from '../models/Entities/LoadSpans';

class AssetRuleGroupHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AssetRuleGroupHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("assetRuleGroupHistory", data, query, loadSpan, rep, AssetRuleGroupHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("assetRuleGroupHistory", data, query, rep, access_token);
  }
}

export default AssetRuleGroupHistoryService;

