//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomFieldDataSourceItem} from '../models/Entities';
//import {CustomFieldDataSourceItemPropertyNames} from '../models/Entities/PropertyNames';
import {CustomFieldDataSourceItemLoadSpan} from '../models/Entities/LoadSpans';

class CustomFieldDataSourceItemService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomFieldDataSourceItemLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customFieldDataSourceItem", data, query, loadSpan, rep, CustomFieldDataSourceItem.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customFieldDataSourceItem", data, query, rep, access_token);
  }
}

export default CustomFieldDataSourceItemService;

