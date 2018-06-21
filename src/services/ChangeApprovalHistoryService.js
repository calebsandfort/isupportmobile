//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeApprovalHistory} from '../models/Entities';
//import {ChangeApprovalHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeApprovalHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ChangeApprovalHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeApprovalHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeApprovalHistory", data, query, loadSpan, rep, ChangeApprovalHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeApprovalHistory", data, query, rep, access_token);
  }
}

export default ChangeApprovalHistoryService;

