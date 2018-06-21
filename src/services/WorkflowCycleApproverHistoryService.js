//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {WorkflowCycleApproverHistory} from '../models/Entities';
//import {WorkflowCycleApproverHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {WorkflowCycleApproverHistoryLoadSpan} from '../models/Entities/LoadSpans';

class WorkflowCycleApproverHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?WorkflowCycleApproverHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("workflowCycleApproverHistory", data, query, loadSpan, rep, WorkflowCycleApproverHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("workflowCycleApproverHistory", data, query, rep, access_token);
  }
}

export default WorkflowCycleApproverHistoryService;

