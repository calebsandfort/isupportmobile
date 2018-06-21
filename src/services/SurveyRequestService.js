//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SurveyRequest} from '../models/Entities';
//import {SurveyRequestPropertyNames} from '../models/Entities/PropertyNames';
import {SurveyRequestLoadSpan} from '../models/Entities/LoadSpans';

class SurveyRequestService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SurveyRequestLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("surveyRequest", data, query, loadSpan, rep, SurveyRequest.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("surveyRequest", data, query, rep, access_token);
  }
}

export default SurveyRequestService;

