//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeLayout} from '../models/Entities';
//import {ChangeLayoutPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeLayoutLoadSpan} from '../models/Entities/LoadSpans';

class ChangeLayoutService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeLayoutLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeLayout", data, query, loadSpan, rep, ChangeLayout.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeLayout", data, query, rep, access_token);
  }
}

export default ChangeLayoutService;

