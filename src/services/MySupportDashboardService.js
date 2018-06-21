//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {MySupportDashboard} from '../models/Entities';
//import {MySupportDashboardPropertyNames} from '../models/Entities/PropertyNames';
import {MySupportDashboardLoadSpan} from '../models/Entities/LoadSpans';

class MySupportDashboardService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?MySupportDashboardLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("mySupportDashboard", data, query, loadSpan, rep, MySupportDashboard.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("mySupportDashboard", data, query, rep, access_token);
  }
}

export default MySupportDashboardService;

