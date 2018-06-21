//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SurveyAnswer} from '../models/Entities';
//import {SurveyAnswerPropertyNames} from '../models/Entities/PropertyNames';
import {SurveyAnswerLoadSpan} from '../models/Entities/LoadSpans';

class SurveyAnswerService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SurveyAnswerLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("surveyAnswer", data, query, loadSpan, rep, SurveyAnswer.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("surveyAnswer", data, query, rep, access_token);
  }
}

export default SurveyAnswerService;

