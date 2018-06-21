//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {EndUserDesktopDefinition} from '../models/Entities';
//import {EndUserDesktopDefinitionPropertyNames} from '../models/Entities/PropertyNames';
import {EndUserDesktopDefinitionLoadSpan} from '../models/Entities/LoadSpans';

class EndUserDesktopDefinitionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?EndUserDesktopDefinitionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("endUserDesktopDefinition", data, query, loadSpan, rep, EndUserDesktopDefinition.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("endUserDesktopDefinition", data, query, rep, access_token);
  }
}

export default EndUserDesktopDefinitionService;

