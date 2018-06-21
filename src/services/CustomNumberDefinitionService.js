//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomNumberDefinition} from '../models/Entities';
//import {CustomNumberDefinitionPropertyNames} from '../models/Entities/PropertyNames';
import {CustomNumberDefinitionLoadSpan} from '../models/Entities/LoadSpans';

class CustomNumberDefinitionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomNumberDefinitionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customNumberDefinition", data, query, loadSpan, rep, CustomNumberDefinition.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customNumberDefinition", data, query, rep, access_token);
  }
}

export default CustomNumberDefinitionService;

