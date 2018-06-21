//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomFieldDefinition} from '../models/Entities';
//import {CustomFieldDefinitionPropertyNames} from '../models/Entities/PropertyNames';
import {CustomFieldDefinitionLoadSpan} from '../models/Entities/LoadSpans';

class CustomFieldDefinitionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomFieldDefinitionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customFieldDefinition", data, query, loadSpan, rep, CustomFieldDefinition.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customFieldDefinition", data, query, rep, access_token);
  }
}

export default CustomFieldDefinitionService;

