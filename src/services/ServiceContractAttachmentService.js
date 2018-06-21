//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceContractAttachment} from '../models/Entities';
//import {ServiceContractAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceContractAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ServiceContractAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceContractAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceContractAttachment", data, query, loadSpan, rep, ServiceContractAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceContractAttachment", data, query, rep, access_token);
  }
}

export default ServiceContractAttachmentService;

