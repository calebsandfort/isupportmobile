//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {MySupportDashboardWidget} from '../models/Entities';
//import {MySupportDashboardWidgetPropertyNames} from '../models/Entities/PropertyNames';
import {MySupportDashboardWidgetLoadSpan} from '../models/Entities/LoadSpans';

class MySupportDashboardWidgetService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?MySupportDashboardWidgetLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("mySupportDashboardWidget", data, query, loadSpan, rep, MySupportDashboardWidget.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("mySupportDashboardWidget", data, query, rep, access_token);
  }
}

export default MySupportDashboardWidgetService;

