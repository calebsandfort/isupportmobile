//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {FrequentlyAskedQuestionTopic} from '../models/Entities';
//import {FrequentlyAskedQuestionTopicPropertyNames} from '../models/Entities/PropertyNames';
import {FrequentlyAskedQuestionTopicLoadSpan} from '../models/Entities/LoadSpans';

class FrequentlyAskedQuestionTopicService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?FrequentlyAskedQuestionTopicLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("frequentlyAskedQuestionTopic", data, query, loadSpan, rep, FrequentlyAskedQuestionTopic.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("frequentlyAskedQuestionTopic", data, query, rep, access_token);
  }
}

export default FrequentlyAskedQuestionTopicService;

