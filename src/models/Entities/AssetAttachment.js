//@flow
import EntityBase from './entityBase';

export class AssetAttachment extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
  assetGuid: string;

  static fromApiEntity(apiAssetAttachment:AssetAttachmentType): AssetAttachment {
    let assetAttachment = new AssetAttachment();
    assetAttachment.id = apiAssetAttachment.id;
    assetAttachment.fileName = apiAssetAttachment.fileName;
    assetAttachment.fileType = apiAssetAttachment.fileType;
    assetAttachment.fileSize = apiAssetAttachment.fileSize;
    assetAttachment.fileData = apiAssetAttachment.fileData;
    assetAttachment.assetGuid = apiAssetAttachment.assetGuid;

    return assetAttachment;
  }
}

export default AssetAttachment;

export type AssetAttachmentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
  assetGuid: string;
}

