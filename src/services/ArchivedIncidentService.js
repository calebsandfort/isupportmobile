//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedIncident} from '../models/Entities';
//import {ArchivedIncidentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedIncidentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedIncidentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedIncidentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedIncident", data, query, loadSpan, rep, ArchivedIncident.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedIncident", data, query, rep, access_token);
  }
}

export default ArchivedIncidentService;

