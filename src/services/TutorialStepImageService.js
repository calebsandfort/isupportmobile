//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {TutorialStepImage} from '../models/Entities';
//import {TutorialStepImagePropertyNames} from '../models/Entities/PropertyNames';
import {TutorialStepImageLoadSpan} from '../models/Entities/LoadSpans';

class TutorialStepImageService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?TutorialStepImageLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("tutorialStepImage", data, query, loadSpan, rep, TutorialStepImage.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("tutorialStepImage", data, query, rep, access_token);
  }
}

export default TutorialStepImageService;

