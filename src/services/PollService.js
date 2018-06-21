//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Poll} from '../models/Entities';
//import {PollPropertyNames} from '../models/Entities/PropertyNames';
import {PollLoadSpan} from '../models/Entities/LoadSpans';

class PollService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PollLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("poll", data, query, loadSpan, rep, Poll.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("poll", data, query, rep, access_token);
  }
}

export default PollService;

