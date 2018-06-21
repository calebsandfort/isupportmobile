//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedProblemCustomField} from '../models/Entities';
//import {ArchivedProblemCustomFieldPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedProblemCustomFieldLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedProblemCustomFieldService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedProblemCustomFieldLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedProblemCustomField", data, query, loadSpan, rep, ArchivedProblemCustomField.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedProblemCustomField", data, query, rep, access_token);
  }
}

export default ArchivedProblemCustomFieldService;

