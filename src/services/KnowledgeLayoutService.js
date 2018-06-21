//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {KnowledgeLayout} from '../models/Entities';
//import {KnowledgeLayoutPropertyNames} from '../models/Entities/PropertyNames';
import {KnowledgeLayoutLoadSpan} from '../models/Entities/LoadSpans';

class KnowledgeLayoutService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?KnowledgeLayoutLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("knowledgeLayout", data, query, loadSpan, rep, KnowledgeLayout.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("knowledgeLayout", data, query, rep, access_token);
  }
}

export default KnowledgeLayoutService;

