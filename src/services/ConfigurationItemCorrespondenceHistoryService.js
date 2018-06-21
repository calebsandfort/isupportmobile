//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ConfigurationItemCorrespondenceHistory} from '../models/Entities';
//import {ConfigurationItemCorrespondenceHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ConfigurationItemCorrespondenceHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ConfigurationItemCorrespondenceHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ConfigurationItemCorrespondenceHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("configurationItemCorrespondenceHistory", data, query, loadSpan, rep, ConfigurationItemCorrespondenceHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("configurationItemCorrespondenceHistory", data, query, rep, access_token);
  }
}

export default ConfigurationItemCorrespondenceHistoryService;

