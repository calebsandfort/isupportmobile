//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {MobileSettings} from '../models/Entities';
//import {MobileSettingsPropertyNames} from '../models/Entities/PropertyNames';
import {MobileSettingsLoadSpan} from '../models/Entities/LoadSpans';

class MobileSettingsService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?MobileSettingsLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("mobileSettings", data, query, loadSpan, rep, MobileSettings.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("mobileSettings", data, query, rep, access_token);
  }
}

export default MobileSettingsService;

