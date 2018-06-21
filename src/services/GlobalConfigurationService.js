//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {GlobalConfiguration} from '../models/Entities';
//import {GlobalConfigurationPropertyNames} from '../models/Entities/PropertyNames';
import {GlobalConfigurationLoadSpan} from '../models/Entities/LoadSpans';

class GlobalConfigurationService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?GlobalConfigurationLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("globalConfiguration", data, query, loadSpan, rep, GlobalConfiguration.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("globalConfiguration", data, query, rep, access_token);
  }
}

export default GlobalConfigurationService;

