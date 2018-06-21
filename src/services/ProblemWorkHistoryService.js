//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemWorkHistory} from '../models/Entities';
//import {ProblemWorkHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemWorkHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ProblemWorkHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemWorkHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemWorkHistory", data, query, loadSpan, rep, ProblemWorkHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemWorkHistory", data, query, rep, access_token);
  }
}

export default ProblemWorkHistoryService;

