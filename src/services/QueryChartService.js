//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {QueryChart} from '../models/Entities';
//import {QueryChartPropertyNames} from '../models/Entities/PropertyNames';
import {QueryChartLoadSpan} from '../models/Entities/LoadSpans';

class QueryChartService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?QueryChartLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("queryChart", data, query, loadSpan, rep, QueryChart.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("queryChart", data, query, rep, access_token);
  }
}

export default QueryChartService;

