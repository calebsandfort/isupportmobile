//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemConfiguration} from '../models/Entities';
//import {ProblemConfigurationPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemConfigurationLoadSpan} from '../models/Entities/LoadSpans';

class ProblemConfigurationService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemConfigurationLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemConfiguration", data, query, loadSpan, rep, ProblemConfiguration.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemConfiguration", data, query, rep, access_token);
  }
}

export default ProblemConfigurationService;

