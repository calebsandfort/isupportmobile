//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeCorrespondenceHistory} from '../models/Entities';
//import {ChangeCorrespondenceHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeCorrespondenceHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ChangeCorrespondenceHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeCorrespondenceHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeCorrespondenceHistory", data, query, loadSpan, rep, ChangeCorrespondenceHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeCorrespondenceHistory", data, query, rep, access_token);
  }
}

export default ChangeCorrespondenceHistoryService;

