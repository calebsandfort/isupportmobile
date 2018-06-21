//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ConfigurationGroup} from '../models/Entities';
//import {ConfigurationGroupPropertyNames} from '../models/Entities/PropertyNames';
import {ConfigurationGroupLoadSpan} from '../models/Entities/LoadSpans';

class ConfigurationGroupService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ConfigurationGroupLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("configurationGroup", data, query, loadSpan, rep, ConfigurationGroup.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("configurationGroup", data, query, rep, access_token);
  }
}

export default ConfigurationGroupService;

