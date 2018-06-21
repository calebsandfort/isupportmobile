//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentApprovalHistory} from '../models/Entities';
//import {IncidentApprovalHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentApprovalHistoryLoadSpan} from '../models/Entities/LoadSpans';

class IncidentApprovalHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentApprovalHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentApprovalHistory", data, query, loadSpan, rep, IncidentApprovalHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentApprovalHistory", data, query, rep, access_token);
  }
}

export default IncidentApprovalHistoryService;

