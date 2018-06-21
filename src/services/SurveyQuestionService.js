//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SurveyQuestion} from '../models/Entities';
//import {SurveyQuestionPropertyNames} from '../models/Entities/PropertyNames';
import {SurveyQuestionLoadSpan} from '../models/Entities/LoadSpans';

class SurveyQuestionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SurveyQuestionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("surveyQuestion", data, query, loadSpan, rep, SurveyQuestion.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("surveyQuestion", data, query, rep, access_token);
  }
}

export default SurveyQuestionService;

