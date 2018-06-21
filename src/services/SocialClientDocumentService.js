//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SocialClientDocument} from '../models/Entities';
//import {SocialClientDocumentPropertyNames} from '../models/Entities/PropertyNames';
import {SocialClientDocumentLoadSpan} from '../models/Entities/LoadSpans';

class SocialClientDocumentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SocialClientDocumentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("socialClientDocument", data, query, loadSpan, rep, SocialClientDocument.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("socialClientDocument", data, query, rep, access_token);
  }
}

export default SocialClientDocumentService;

