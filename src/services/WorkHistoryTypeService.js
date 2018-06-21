//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {WorkHistoryType} from '../models/Entities';
//import {WorkHistoryTypePropertyNames} from '../models/Entities/PropertyNames';
import {WorkHistoryTypeLoadSpan} from '../models/Entities/LoadSpans';

class WorkHistoryTypeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?WorkHistoryTypeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("workHistoryType", data, query, loadSpan, rep, WorkHistoryType.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("workHistoryType", data, query, rep, access_token);
  }
}

export default WorkHistoryTypeService;

