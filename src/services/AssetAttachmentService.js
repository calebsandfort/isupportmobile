//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AssetAttachment} from '../models/Entities';
//import {AssetAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {AssetAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class AssetAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AssetAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("assetAttachment", data, query, loadSpan, rep, AssetAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("assetAttachment", data, query, rep, access_token);
  }
}

export default AssetAttachmentService;

