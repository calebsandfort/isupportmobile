//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {RuleGroup} from '../models/Entities';
//import {RuleGroupPropertyNames} from '../models/Entities/PropertyNames';
import {RuleGroupLoadSpan} from '../models/Entities/LoadSpans';

class RuleGroupService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?RuleGroupLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("ruleGroup", data, query, loadSpan, rep, RuleGroup.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("ruleGroup", data, query, rep, access_token);
  }
}

export default RuleGroupService;

