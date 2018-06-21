//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Problem} from '../models/Entities';
//import {ProblemPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemLoadSpan} from '../models/Entities/LoadSpans';

class ProblemService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problem", data, query, loadSpan, rep, Problem.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problem", data, query, rep, access_token);
  }
}

export default ProblemService;

