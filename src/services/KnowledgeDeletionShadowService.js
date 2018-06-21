//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {KnowledgeDeletionShadow} from '../models/Entities';
//import {KnowledgeDeletionShadowPropertyNames} from '../models/Entities/PropertyNames';
import {KnowledgeDeletionShadowLoadSpan} from '../models/Entities/LoadSpans';

class KnowledgeDeletionShadowService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?KnowledgeDeletionShadowLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("knowledgeDeletionShadow", data, query, loadSpan, rep, KnowledgeDeletionShadow.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("knowledgeDeletionShadow", data, query, rep, access_token);
  }
}

export default KnowledgeDeletionShadowService;

