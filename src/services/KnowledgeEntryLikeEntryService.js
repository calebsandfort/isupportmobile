//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {KnowledgeEntryLikeEntry} from '../models/Entities';
//import {KnowledgeEntryLikeEntryPropertyNames} from '../models/Entities/PropertyNames';
import {KnowledgeEntryLikeEntryLoadSpan} from '../models/Entities/LoadSpans';

class KnowledgeEntryLikeEntryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?KnowledgeEntryLikeEntryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("knowledgeEntryLikeEntry", data, query, loadSpan, rep, KnowledgeEntryLikeEntry.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("knowledgeEntryLikeEntry", data, query, rep, access_token);
  }
}

export default KnowledgeEntryLikeEntryService;

