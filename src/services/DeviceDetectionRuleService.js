//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {DeviceDetectionRule} from '../models/Entities';
//import {DeviceDetectionRulePropertyNames} from '../models/Entities/PropertyNames';
import {DeviceDetectionRuleLoadSpan} from '../models/Entities/LoadSpans';

class DeviceDetectionRuleService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?DeviceDetectionRuleLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("deviceDetectionRule", data, query, loadSpan, rep, DeviceDetectionRule.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("deviceDetectionRule", data, query, rep, access_token);
  }
}

export default DeviceDetectionRuleService;

