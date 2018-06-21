//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {KnowledgeEntry} from '../models/Entities';
//import {KnowledgeEntryPropertyNames} from '../models/Entities/PropertyNames';
import {KnowledgeEntryLoadSpan} from '../models/Entities/LoadSpans';

class KnowledgeEntryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?KnowledgeEntryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("knowledgeEntry", data, query, loadSpan, rep, KnowledgeEntry.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("knowledgeEntry", data, query, rep, access_token);
  }
}

export default KnowledgeEntryService;

