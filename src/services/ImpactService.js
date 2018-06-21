//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Impact} from '../models/Entities';
//import {ImpactPropertyNames} from '../models/Entities/PropertyNames';
import {ImpactLoadSpan} from '../models/Entities/LoadSpans';

class ImpactService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ImpactLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("impact", data, query, loadSpan, rep, Impact.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("impact", data, query, rep, access_token);
  }
}

export default ImpactService;

