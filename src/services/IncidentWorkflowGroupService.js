//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentWorkflowGroup} from '../models/Entities';
//import {IncidentWorkflowGroupPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentWorkflowGroupLoadSpan} from '../models/Entities/LoadSpans';

class IncidentWorkflowGroupService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentWorkflowGroupLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentWorkflowGroup", data, query, loadSpan, rep, IncidentWorkflowGroup.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentWorkflowGroup", data, query, rep, access_token);
  }
}

export default IncidentWorkflowGroupService;

