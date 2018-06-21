//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeAuditHistory} from '../models/Entities';
//import {ChangeAuditHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeAuditHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ChangeAuditHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeAuditHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeAuditHistory", data, query, loadSpan, rep, ChangeAuditHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeAuditHistory", data, query, rep, access_token);
  }
}

export default ChangeAuditHistoryService;

