//@flow
import EntityBase from './entityBase';

export class ExternalLink extends EntityBase {
  name: string;
  date: string;
  url: string;

  static fromApiEntity(apiExternalLink:ExternalLinkType): ExternalLink {
    let externalLink = new ExternalLink();
    externalLink.id = apiExternalLink.id;
    externalLink.name = apiExternalLink.name;
    externalLink.date = apiExternalLink.date;
    externalLink.url = apiExternalLink.url;

    return externalLink;
  }
}

export default ExternalLink;

export type ExternalLinkType = {
  id: number,
  name: string;
  date: string;
  url: string;
}

