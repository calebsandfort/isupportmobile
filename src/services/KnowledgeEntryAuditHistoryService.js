//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {KnowledgeEntryAuditHistory} from '../models/Entities';
//import {KnowledgeEntryAuditHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {KnowledgeEntryAuditHistoryLoadSpan} from '../models/Entities/LoadSpans';

class KnowledgeEntryAuditHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?KnowledgeEntryAuditHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("knowledgeEntryAuditHistory", data, query, loadSpan, rep, KnowledgeEntryAuditHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("knowledgeEntryAuditHistory", data, query, rep, access_token);
  }
}

export default KnowledgeEntryAuditHistoryService;

