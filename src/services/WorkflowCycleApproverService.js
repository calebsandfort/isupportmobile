//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {WorkflowCycleApprover} from '../models/Entities';
//import {WorkflowCycleApproverPropertyNames} from '../models/Entities/PropertyNames';
import {WorkflowCycleApproverLoadSpan} from '../models/Entities/LoadSpans';

class WorkflowCycleApproverService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?WorkflowCycleApproverLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("workflowCycleApprover", data, query, loadSpan, rep, WorkflowCycleApprover.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("workflowCycleApprover", data, query, rep, access_token);
  }
}

export default WorkflowCycleApproverService;

