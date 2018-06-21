//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ConfigurationItem} from '../models/Entities';
//import {ConfigurationItemPropertyNames} from '../models/Entities/PropertyNames';
import {ConfigurationItemLoadSpan} from '../models/Entities/LoadSpans';

class ConfigurationItemService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ConfigurationItemLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("configurationItem", data, query, loadSpan, rep, ConfigurationItem.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("configurationItem", data, query, rep, access_token);
  }
}

export default ConfigurationItemService;

