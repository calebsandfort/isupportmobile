//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {JobFunction} from '../models/Entities';
//import {JobFunctionPropertyNames} from '../models/Entities/PropertyNames';
import {JobFunctionLoadSpan} from '../models/Entities/LoadSpans';

class JobFunctionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?JobFunctionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("jobFunction", data, query, loadSpan, rep, JobFunction.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("jobFunction", data, query, rep, access_token);
  }
}

export default JobFunctionService;

