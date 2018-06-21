//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {LinkedOpenIdAccount} from '../models/Entities';
//import {LinkedOpenIdAccountPropertyNames} from '../models/Entities/PropertyNames';
import {LinkedOpenIdAccountLoadSpan} from '../models/Entities/LoadSpans';

class LinkedOpenIdAccountService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?LinkedOpenIdAccountLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("linkedOpenIdAccount", data, query, loadSpan, rep, LinkedOpenIdAccount.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("linkedOpenIdAccount", data, query, rep, access_token);
  }
}

export default LinkedOpenIdAccountService;

