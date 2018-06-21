//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SurveyAssociatedQuestion} from '../models/Entities';
//import {SurveyAssociatedQuestionPropertyNames} from '../models/Entities/PropertyNames';
import {SurveyAssociatedQuestionLoadSpan} from '../models/Entities/LoadSpans';

class SurveyAssociatedQuestionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SurveyAssociatedQuestionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("surveyAssociatedQuestion", data, query, loadSpan, rep, SurveyAssociatedQuestion.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("surveyAssociatedQuestion", data, query, rep, access_token);
  }
}

export default SurveyAssociatedQuestionService;

