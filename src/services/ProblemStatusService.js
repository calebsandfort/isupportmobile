//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemStatus} from '../models/Entities';
//import {ProblemStatusPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemStatusLoadSpan} from '../models/Entities/LoadSpans';

class ProblemStatusService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemStatusLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemStatus", data, query, loadSpan, rep, ProblemStatus.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemStatus", data, query, rep, access_token);
  }
}

export default ProblemStatusService;

