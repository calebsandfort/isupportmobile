//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PollVote} from '../models/Entities';
//import {PollVotePropertyNames} from '../models/Entities/PropertyNames';
import {PollVoteLoadSpan} from '../models/Entities/LoadSpans';

class PollVoteService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PollVoteLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("pollVote", data, query, loadSpan, rep, PollVote.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("pollVote", data, query, rep, access_token);
  }
}

export default PollVoteService;

