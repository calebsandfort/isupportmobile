//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomFieldValue} from '../models/Entities';
//import {CustomFieldValuePropertyNames} from '../models/Entities/PropertyNames';
import {CustomFieldValueLoadSpan} from '../models/Entities/LoadSpans';

class CustomFieldValueService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomFieldValueLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customFieldValue", data, query, loadSpan, rep, CustomFieldValue.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customFieldValue", data, query, rep, access_token);
  }
}

export default CustomFieldValueService;

