//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ApprovalCycle} from '../models/Entities';
//import {ApprovalCyclePropertyNames} from '../models/Entities/PropertyNames';
import {ApprovalCycleLoadSpan} from '../models/Entities/LoadSpans';

class ApprovalCycleService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ApprovalCycleLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("approvalCycle", data, query, loadSpan, rep, ApprovalCycle.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("approvalCycle", data, query, rep, access_token);
  }
}

export default ApprovalCycleService;

