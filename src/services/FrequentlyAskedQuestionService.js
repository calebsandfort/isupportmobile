//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {FrequentlyAskedQuestion} from '../models/Entities';
//import {FrequentlyAskedQuestionPropertyNames} from '../models/Entities/PropertyNames';
import {FrequentlyAskedQuestionLoadSpan} from '../models/Entities/LoadSpans';

class FrequentlyAskedQuestionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?FrequentlyAskedQuestionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("frequentlyAskedQuestion", data, query, loadSpan, rep, FrequentlyAskedQuestion.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("frequentlyAskedQuestion", data, query, rep, access_token);
  }
}

export default FrequentlyAskedQuestionService;

