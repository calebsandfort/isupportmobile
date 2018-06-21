//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {DiscussionFeedIcon} from '../models/Entities';
//import {DiscussionFeedIconPropertyNames} from '../models/Entities/PropertyNames';
import {DiscussionFeedIconLoadSpan} from '../models/Entities/LoadSpans';

class DiscussionFeedIconService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?DiscussionFeedIconLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("discussionFeedIcon", data, query, loadSpan, rep, DiscussionFeedIcon.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("discussionFeedIcon", data, query, rep, access_token);
  }
}

export default DiscussionFeedIconService;

