//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemRuleGroupHistory} from '../models/Entities';
//import {ProblemRuleGroupHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemRuleGroupHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ProblemRuleGroupHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemRuleGroupHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemRuleGroupHistory", data, query, loadSpan, rep, ProblemRuleGroupHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemRuleGroupHistory", data, query, rep, access_token);
  }
}

export default ProblemRuleGroupHistoryService;

