//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {KnowledgeEntryRuleGroupHistory} from '../models/Entities';
//import {KnowledgeEntryRuleGroupHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {KnowledgeEntryRuleGroupHistoryLoadSpan} from '../models/Entities/LoadSpans';

class KnowledgeEntryRuleGroupHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?KnowledgeEntryRuleGroupHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("knowledgeEntryRuleGroupHistory", data, query, loadSpan, rep, KnowledgeEntryRuleGroupHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("knowledgeEntryRuleGroupHistory", data, query, rep, access_token);
  }
}

export default KnowledgeEntryRuleGroupHistoryService;

