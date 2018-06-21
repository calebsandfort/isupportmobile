//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AccessCircle} from '../models/Entities';
//import {AccessCirclePropertyNames} from '../models/Entities/PropertyNames';
import {AccessCircleLoadSpan} from '../models/Entities/LoadSpans';

class AccessCircleService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AccessCircleLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("accessCircle", data, query, loadSpan, rep, AccessCircle.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("accessCircle", data, query, rep, access_token);
  }
}

export default AccessCircleService;

