//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeStatus} from '../models/Entities';
//import {ChangeStatusPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeStatusLoadSpan} from '../models/Entities/LoadSpans';

class ChangeStatusService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeStatusLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeStatus", data, query, loadSpan, rep, ChangeStatus.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeStatus", data, query, rep, access_token);
  }
}

export default ChangeStatusService;

