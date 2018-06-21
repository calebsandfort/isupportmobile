//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {WorkflowApprovalCycle} from '../models/Entities';
//import {WorkflowApprovalCyclePropertyNames} from '../models/Entities/PropertyNames';
import {WorkflowApprovalCycleLoadSpan} from '../models/Entities/LoadSpans';

class WorkflowApprovalCycleService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?WorkflowApprovalCycleLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("workflowApprovalCycle", data, query, loadSpan, rep, WorkflowApprovalCycle.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("workflowApprovalCycle", data, query, rep, access_token);
  }
}

export default WorkflowApprovalCycleService;

