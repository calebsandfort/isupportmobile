//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeDeletionShadow} from '../models/Entities';
//import {ChangeDeletionShadowPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeDeletionShadowLoadSpan} from '../models/Entities/LoadSpans';

class ChangeDeletionShadowService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeDeletionShadowLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeDeletionShadow", data, query, loadSpan, rep, ChangeDeletionShadow.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeDeletionShadow", data, query, rep, access_token);
  }
}

export default ChangeDeletionShadowService;

