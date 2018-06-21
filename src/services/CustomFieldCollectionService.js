//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomFieldCollection} from '../models/Entities';
//import {CustomFieldCollectionPropertyNames} from '../models/Entities/PropertyNames';
import {CustomFieldCollectionLoadSpan} from '../models/Entities/LoadSpans';

class CustomFieldCollectionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomFieldCollectionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customFieldCollection", data, query, loadSpan, rep, CustomFieldCollection.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customFieldCollection", data, query, rep, access_token);
  }
}

export default CustomFieldCollectionService;

