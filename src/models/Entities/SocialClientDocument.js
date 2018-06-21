//@flow
import EntityBase from './entityBase';

export class SocialClientDocument extends EntityBase {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;

  static fromApiEntity(apiSocialClientDocument:SocialClientDocumentType): SocialClientDocument {
    let socialClientDocument = new SocialClientDocument();
    socialClientDocument.id = apiSocialClientDocument.id;
    socialClientDocument.fileName = apiSocialClientDocument.fileName;
    socialClientDocument.fileType = apiSocialClientDocument.fileType;
    socialClientDocument.fileSize = apiSocialClientDocument.fileSize;
    socialClientDocument.fileData = apiSocialClientDocument.fileData;

    return socialClientDocument;
  }
}

export default SocialClientDocument;

export type SocialClientDocumentType = {
  id: number,
  fileName: string;
  fileType: string;
  fileSize: string;
  fileData: string;
}

