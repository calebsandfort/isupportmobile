//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ExternalLink} from '../models/Entities';
//import {ExternalLinkPropertyNames} from '../models/Entities/PropertyNames';
import {ExternalLinkLoadSpan} from '../models/Entities/LoadSpans';

class ExternalLinkService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ExternalLinkLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("externalLink", data, query, loadSpan, rep, ExternalLink.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("externalLink", data, query, rep, access_token);
  }
}

export default ExternalLinkService;

