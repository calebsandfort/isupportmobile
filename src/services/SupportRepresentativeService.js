//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SupportRepresentative} from '../models/Entities';
//import {SupportRepresentativePropertyNames} from '../models/Entities/PropertyNames';
import {SupportRepresentativeLoadSpan} from '../models/Entities/LoadSpans';

class SupportRepresentativeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SupportRepresentativeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("supportRepresentative", data, query, loadSpan, rep, SupportRepresentative.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("supportRepresentative", data, query, rep, access_token);
  }
}

export default SupportRepresentativeService;

