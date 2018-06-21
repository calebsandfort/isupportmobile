//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomFieldDependency} from '../models/Entities';
//import {CustomFieldDependencyPropertyNames} from '../models/Entities/PropertyNames';
import {CustomFieldDependencyLoadSpan} from '../models/Entities/LoadSpans';

class CustomFieldDependencyService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomFieldDependencyLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customFieldDependency", data, query, loadSpan, rep, CustomFieldDependency.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customFieldDependency", data, query, rep, access_token);
  }
}

export default CustomFieldDependencyService;

