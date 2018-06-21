//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ConfigurationItemType} from '../models/Entities';
//import {ConfigurationItemTypePropertyNames} from '../models/Entities/PropertyNames';
import {ConfigurationItemTypeLoadSpan} from '../models/Entities/LoadSpans';

class ConfigurationItemTypeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ConfigurationItemTypeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("configurationItemType", data, query, loadSpan, rep, ConfigurationItemType.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("configurationItemType", data, query, rep, access_token);
  }
}

export default ConfigurationItemTypeService;

