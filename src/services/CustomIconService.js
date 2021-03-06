//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomIcon} from '../models/Entities';
//import {CustomIconPropertyNames} from '../models/Entities/PropertyNames';
import {CustomIconLoadSpan} from '../models/Entities/LoadSpans';

class CustomIconService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomIconLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customIcon", data, query, loadSpan, rep, CustomIcon.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customIcon", data, query, rep, access_token);
  }
}

export default CustomIconService;

