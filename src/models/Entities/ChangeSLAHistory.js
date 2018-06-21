//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class ChangeSLAHistory extends EntityBase {
  createdDate: string;
  entry: string;
  changeNumber: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiChangeSLAHistory:ChangeSLAHistoryType): ChangeSLAHistory {
    let changeSLAHistory = new ChangeSLAHistory();
    changeSLAHistory.id = apiChangeSLAHistory.id;
    changeSLAHistory.createdDate = apiChangeSLAHistory.createdDate;
    changeSLAHistory.entry = apiChangeSLAHistory.entry;
    changeSLAHistory.changeNumber = apiChangeSLAHistory.changeNumber;
    if (apiChangeSLAHistory.owner) changeSLAHistory.owner = SupportRepresentative.fromApiEntity(apiChangeSLAHistory.owner);

    return changeSLAHistory;
  }
}

export default ChangeSLAHistory;

export type ChangeSLAHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  changeNumber: string;
  owner: SupportRepresentative;
}

