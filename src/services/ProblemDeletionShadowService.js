//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemDeletionShadow} from '../models/Entities';
//import {ProblemDeletionShadowPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemDeletionShadowLoadSpan} from '../models/Entities/LoadSpans';

class ProblemDeletionShadowService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemDeletionShadowLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemDeletionShadow", data, query, loadSpan, rep, ProblemDeletionShadow.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemDeletionShadow", data, query, rep, access_token);
  }
}

export default ProblemDeletionShadowService;

