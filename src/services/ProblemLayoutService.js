//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemLayout} from '../models/Entities';
//import {ProblemLayoutPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemLayoutLoadSpan} from '../models/Entities/LoadSpans';

class ProblemLayoutService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemLayoutLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemLayout", data, query, loadSpan, rep, ProblemLayout.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemLayout", data, query, rep, access_token);
  }
}

export default ProblemLayoutService;

