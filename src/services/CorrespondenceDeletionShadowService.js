//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CorrespondenceDeletionShadow} from '../models/Entities';
//import {CorrespondenceDeletionShadowPropertyNames} from '../models/Entities/PropertyNames';
import {CorrespondenceDeletionShadowLoadSpan} from '../models/Entities/LoadSpans';

class CorrespondenceDeletionShadowService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CorrespondenceDeletionShadowLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("correspondenceDeletionShadow", data, query, loadSpan, rep, CorrespondenceDeletionShadow.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("correspondenceDeletionShadow", data, query, rep, access_token);
  }
}

export default CorrespondenceDeletionShadowService;

