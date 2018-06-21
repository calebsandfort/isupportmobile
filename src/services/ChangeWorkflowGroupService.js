//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeWorkflowGroup} from '../models/Entities';
//import {ChangeWorkflowGroupPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeWorkflowGroupLoadSpan} from '../models/Entities/LoadSpans';

class ChangeWorkflowGroupService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeWorkflowGroupLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeWorkflowGroup", data, query, loadSpan, rep, ChangeWorkflowGroup.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeWorkflowGroup", data, query, rep, access_token);
  }
}

export default ChangeWorkflowGroupService;

