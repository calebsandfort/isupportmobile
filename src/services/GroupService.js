//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Group} from '../models/Entities';
//import {GroupPropertyNames} from '../models/Entities/PropertyNames';
import {GroupLoadSpan} from '../models/Entities/LoadSpans';

class GroupService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?GroupLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("group", data, query, loadSpan, rep, Group.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("group", data, query, rep, access_token);
  }
}

export default GroupService;

