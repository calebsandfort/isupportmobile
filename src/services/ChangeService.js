//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Change} from '../models/Entities';
//import {ChangePropertyNames} from '../models/Entities/PropertyNames';
import {ChangeLoadSpan} from '../models/Entities/LoadSpans';

class ChangeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("change", data, query, loadSpan, rep, Change.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("change", data, query, rep, access_token);
  }
}

export default ChangeService;

