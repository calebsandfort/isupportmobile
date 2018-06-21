//@flow
// import qs from 'qs';
import ServiceBase from './serviceBase';
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
 SearchFilter, SearchFilterCondition
} from '../models';
import {Headline} from '../models/Entities';
import {HeadlinePropertyNames} from '../models/Entities/PropertyNames';
import {HeadlineLoadSpan} from '../models/Entities/LoadSpans';
import moment from 'moment';

class HeadlineService extends ServiceBase {
  static getActiveHeadlines(): Promise<CollectionResponse | ServiceError>{
    const propertyNames = new HeadlinePropertyNames();

    let query = new EntityQuery();
    query.searchFilters.push(new SearchFilter(true, propertyNames.expirationDate, SearchFilterCondition.After, moment().format('YYYY-MM-DDTHH:mm:ss')));

    let loadSpan = new HeadlineLoadSpan();
    loadSpan.message = true;

    return iSupportService.executeGetCollection('headline', null, query, loadSpan, null, Headline.fromApiEntity, '');
  }

  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?HeadlineLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("headline", data, query, loadSpan, rep, Headline.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("headline", data, query, rep, access_token);
  }
}

export default HeadlineService;
