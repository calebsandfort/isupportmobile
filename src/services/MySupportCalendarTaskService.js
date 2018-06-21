//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {MySupportCalendarTask} from '../models/Entities';
//import {MySupportCalendarTaskPropertyNames} from '../models/Entities/PropertyNames';
import {MySupportCalendarTaskLoadSpan} from '../models/Entities/LoadSpans';

class MySupportCalendarTaskService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?MySupportCalendarTaskLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("mySupportCalendarTask", data, query, loadSpan, rep, MySupportCalendarTask.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("mySupportCalendarTask", data, query, rep, access_token);
  }
}

export default MySupportCalendarTaskService;

