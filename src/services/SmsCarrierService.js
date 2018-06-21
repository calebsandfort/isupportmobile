//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SmsCarrier} from '../models/Entities';
//import {SmsCarrierPropertyNames} from '../models/Entities/PropertyNames';
import {SmsCarrierLoadSpan} from '../models/Entities/LoadSpans';

class SmsCarrierService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SmsCarrierLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("smsCarrier", data, query, loadSpan, rep, SmsCarrier.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("smsCarrier", data, query, rep, access_token);
  }
}

export default SmsCarrierService;

