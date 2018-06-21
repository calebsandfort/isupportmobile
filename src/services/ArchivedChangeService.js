//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedChange} from '../models/Entities';
//import {ArchivedChangePropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedChangeLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedChangeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedChangeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedChange", data, query, loadSpan, rep, ArchivedChange.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedChange", data, query, rep, access_token);
  }
}

export default ArchivedChangeService;

