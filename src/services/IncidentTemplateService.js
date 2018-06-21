//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentTemplate} from '../models/Entities';
//import {IncidentTemplatePropertyNames} from '../models/Entities/PropertyNames';
import {IncidentTemplateLoadSpan} from '../models/Entities/LoadSpans';

class IncidentTemplateService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentTemplateLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentTemplate", data, query, loadSpan, rep, IncidentTemplate.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentTemplate", data, query, rep, access_token);
  }
}

export default IncidentTemplateService;

