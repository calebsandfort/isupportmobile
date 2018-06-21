//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {MySupportCalendar} from '../models/Entities';
//import {MySupportCalendarPropertyNames} from '../models/Entities/PropertyNames';
import {MySupportCalendarLoadSpan} from '../models/Entities/LoadSpans';

class MySupportCalendarService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?MySupportCalendarLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("mySupportCalendar", data, query, loadSpan, rep, MySupportCalendar.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("mySupportCalendar", data, query, rep, access_token);
  }
}

export default MySupportCalendarService;

