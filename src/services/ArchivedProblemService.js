//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedProblem} from '../models/Entities';
//import {ArchivedProblemPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedProblemLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedProblemService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedProblemLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedProblem", data, query, loadSpan, rep, ArchivedProblem.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedProblem", data, query, rep, access_token);
  }
}

export default ArchivedProblemService;

