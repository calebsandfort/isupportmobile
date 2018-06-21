//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeTemplateAttachment} from '../models/Entities';
//import {ChangeTemplateAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeTemplateAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ChangeTemplateAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeTemplateAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeTemplateAttachment", data, query, loadSpan, rep, ChangeTemplateAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeTemplateAttachment", data, query, rep, access_token);
  }
}

export default ChangeTemplateAttachmentService;

