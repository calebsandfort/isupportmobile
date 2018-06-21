//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeCustomerWorkHistory} from '../models/Entities';
//import {ChangeCustomerWorkHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeCustomerWorkHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ChangeCustomerWorkHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeCustomerWorkHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeCustomerWorkHistory", data, query, loadSpan, rep, ChangeCustomerWorkHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeCustomerWorkHistory", data, query, rep, access_token);
  }
}

export default ChangeCustomerWorkHistoryService;

