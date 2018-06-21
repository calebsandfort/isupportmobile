//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeConfiguration} from '../models/Entities';
//import {ChangeConfigurationPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeConfigurationLoadSpan} from '../models/Entities/LoadSpans';

class ChangeConfigurationService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeConfigurationLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeConfiguration", data, query, loadSpan, rep, ChangeConfiguration.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeConfiguration", data, query, rep, access_token);
  }
}

export default ChangeConfigurationService;

