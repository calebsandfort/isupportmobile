//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemAuditHistory} from '../models/Entities';
//import {ProblemAuditHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemAuditHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ProblemAuditHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemAuditHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemAuditHistory", data, query, loadSpan, rep, ProblemAuditHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemAuditHistory", data, query, rep, access_token);
  }
}

export default ProblemAuditHistoryService;

