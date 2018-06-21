//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SurveyQuestionDisplayCondition} from '../models/Entities';
//import {SurveyQuestionDisplayConditionPropertyNames} from '../models/Entities/PropertyNames';
import {SurveyQuestionDisplayConditionLoadSpan} from '../models/Entities/LoadSpans';

class SurveyQuestionDisplayConditionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SurveyQuestionDisplayConditionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("surveyQuestionDisplayCondition", data, query, loadSpan, rep, SurveyQuestionDisplayCondition.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("surveyQuestionDisplayCondition", data, query, rep, access_token);
  }
}

export default SurveyQuestionDisplayConditionService;

