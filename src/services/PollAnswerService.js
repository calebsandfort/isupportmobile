//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PollAnswer} from '../models/Entities';
//import {PollAnswerPropertyNames} from '../models/Entities/PropertyNames';
import {PollAnswerLoadSpan} from '../models/Entities/LoadSpans';

class PollAnswerService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PollAnswerLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("pollAnswer", data, query, loadSpan, rep, PollAnswer.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("pollAnswer", data, query, rep, access_token);
  }
}

export default PollAnswerService;

