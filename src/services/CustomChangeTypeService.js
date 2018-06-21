//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomChangeType} from '../models/Entities';
//import {CustomChangeTypePropertyNames} from '../models/Entities/PropertyNames';
import {CustomChangeTypeLoadSpan} from '../models/Entities/LoadSpans';

class CustomChangeTypeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomChangeTypeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customChangeType", data, query, loadSpan, rep, CustomChangeType.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customChangeType", data, query, rep, access_token);
  }
}

export default CustomChangeTypeService;

