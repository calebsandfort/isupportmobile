//@flow
import qs from 'qs';
import ServiceBase from './serviceBase';
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Incident} from '../models/Entities';
//import {IncidentPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentLoadSpan} from '../models/Entities/LoadSpans';

class IncidentService extends ServiceBase {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incident", data, query, loadSpan, rep, Incident.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incident", data, query, rep, access_token);
  }

  static initNew(rep: any, access_token: string): Promise<Incident | ServiceError>{
    return super.api().get(`/incident/initnew?${qs.stringify(rep)}`, { headers: { Authorization: `Bearer ${access_token}` } })
    .then(response => {
      return Incident.fromApiEntity(response.data);
    })
    .catch(error => {
      return {
        message: error.message
      };
    });
  }
}

export default IncidentService;
