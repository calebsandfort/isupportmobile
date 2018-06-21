//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Acknowledgment} from '../models/Entities';
//import {AcknowledgmentPropertyNames} from '../models/Entities/PropertyNames';
import {AcknowledgmentLoadSpan} from '../models/Entities/LoadSpans';

class AcknowledgmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AcknowledgmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("acknowledgment", data, query, loadSpan, rep, Acknowledgment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("acknowledgment", data, query, rep, access_token);
  }
}

export default AcknowledgmentService;

