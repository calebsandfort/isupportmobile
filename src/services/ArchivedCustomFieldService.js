//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedCustomField} from '../models/Entities';
//import {ArchivedCustomFieldPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedCustomFieldLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedCustomFieldService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedCustomFieldLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedCustomField", data, query, loadSpan, rep, ArchivedCustomField.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedCustomField", data, query, rep, access_token);
  }
}

export default ArchivedCustomFieldService;

