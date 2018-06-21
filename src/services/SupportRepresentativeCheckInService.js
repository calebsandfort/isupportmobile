//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SupportRepresentativeCheckIn} from '../models/Entities';
//import {SupportRepresentativeCheckInPropertyNames} from '../models/Entities/PropertyNames';
import {SupportRepresentativeCheckInLoadSpan} from '../models/Entities/LoadSpans';

class SupportRepresentativeCheckInService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SupportRepresentativeCheckInLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("supportRepresentativeCheckIn", data, query, loadSpan, rep, SupportRepresentativeCheckIn.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("supportRepresentativeCheckIn", data, query, rep, access_token);
  }
}

export default SupportRepresentativeCheckInService;

