//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {WorkflowApprovalCycleHistory} from '../models/Entities';
//import {WorkflowApprovalCycleHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {WorkflowApprovalCycleHistoryLoadSpan} from '../models/Entities/LoadSpans';

class WorkflowApprovalCycleHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?WorkflowApprovalCycleHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("workflowApprovalCycleHistory", data, query, loadSpan, rep, WorkflowApprovalCycleHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("workflowApprovalCycleHistory", data, query, rep, access_token);
  }
}

export default WorkflowApprovalCycleHistoryService;

