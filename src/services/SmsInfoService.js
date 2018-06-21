//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SmsInfo} from '../models/Entities';
//import {SmsInfoPropertyNames} from '../models/Entities/PropertyNames';
import {SmsInfoLoadSpan} from '../models/Entities/LoadSpans';

class SmsInfoService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SmsInfoLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("smsInfo", data, query, loadSpan, rep, SmsInfo.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("smsInfo", data, query, rep, access_token);
  }
}

export default SmsInfoService;

