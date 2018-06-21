//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomFieldDataSource} from '../models/Entities';
//import {CustomFieldDataSourcePropertyNames} from '../models/Entities/PropertyNames';
import {CustomFieldDataSourceLoadSpan} from '../models/Entities/LoadSpans';

class CustomFieldDataSourceService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomFieldDataSourceLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customFieldDataSource", data, query, loadSpan, rep, CustomFieldDataSource.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customFieldDataSource", data, query, rep, access_token);
  }
}

export default CustomFieldDataSourceService;

