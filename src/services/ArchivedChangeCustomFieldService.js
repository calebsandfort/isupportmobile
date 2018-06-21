//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedChangeCustomField} from '../models/Entities';
//import {ArchivedChangeCustomFieldPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedChangeCustomFieldLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedChangeCustomFieldService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedChangeCustomFieldLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedChangeCustomField", data, query, loadSpan, rep, ArchivedChangeCustomField.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedChangeCustomField", data, query, rep, access_token);
  }
}

export default ArchivedChangeCustomFieldService;

