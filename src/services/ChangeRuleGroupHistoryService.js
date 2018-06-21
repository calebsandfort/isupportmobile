//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeRuleGroupHistory} from '../models/Entities';
//import {ChangeRuleGroupHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeRuleGroupHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ChangeRuleGroupHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeRuleGroupHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeRuleGroupHistory", data, query, loadSpan, rep, ChangeRuleGroupHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeRuleGroupHistory", data, query, rep, access_token);
  }
}

export default ChangeRuleGroupHistoryService;

