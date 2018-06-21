//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentCorrespondenceHistory} from '../models/Entities';
//import {IncidentCorrespondenceHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentCorrespondenceHistoryLoadSpan} from '../models/Entities/LoadSpans';

class IncidentCorrespondenceHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentCorrespondenceHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentCorrespondenceHistory", data, query, loadSpan, rep, IncidentCorrespondenceHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentCorrespondenceHistory", data, query, rep, access_token);
  }
}

export default IncidentCorrespondenceHistoryService;

