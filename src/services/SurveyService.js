//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Survey} from '../models/Entities';
//import {SurveyPropertyNames} from '../models/Entities/PropertyNames';
import {SurveyLoadSpan} from '../models/Entities/LoadSpans';

class SurveyService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SurveyLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("survey", data, query, loadSpan, rep, Survey.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("survey", data, query, rep, access_token);
  }
}

export default SurveyService;

