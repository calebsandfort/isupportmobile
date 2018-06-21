//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ChangeCorrespondenceHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiChangeCorrespondenceHistory:ChangeCorrespondenceHistoryType): ChangeCorrespondenceHistory {
    let changeCorrespondenceHistory = new ChangeCorrespondenceHistory();
    changeCorrespondenceHistory.id = apiChangeCorrespondenceHistory.id;
    changeCorrespondenceHistory.createdDate = apiChangeCorrespondenceHistory.createdDate;
    changeCorrespondenceHistory.entry = apiChangeCorrespondenceHistory.entry;
    if (apiChangeCorrespondenceHistory.owner) changeCorrespondenceHistory.owner = SupportRepresentative.fromApiEntity(apiChangeCorrespondenceHistory.owner);

    return changeCorrespondenceHistory;
  }
}

export default ChangeCorrespondenceHistory;

export type ChangeCorrespondenceHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

