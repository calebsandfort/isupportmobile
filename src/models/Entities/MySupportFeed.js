//@flow
import EntityBase from './entityBase';
import SelfHelpGuideItem from './SelfHelpGuideItem';
import AccessCircle from './AccessCircle';
import {EntityFields} from './Enums';
import {EntityTypes} from './Enums';

export class MySupportFeed extends EntityBase {
  name: string;
  detailFields: string;
  textFields: string;
  sortAscending: string;
  sortField: EntityFields;
  entityType: EntityTypes;
  assistBarButtons: EntityTypes;
  selfHelpGuide: SelfHelpGuideItem;
  accessCircle: AccessCircle;

  static fromApiEntity(apiMySupportFeed:MySupportFeedType): MySupportFeed {
    let mySupportFeed = new MySupportFeed();
    mySupportFeed.id = apiMySupportFeed.id;
    mySupportFeed.name = apiMySupportFeed.name;
    mySupportFeed.detailFields = apiMySupportFeed.detailFields;
    mySupportFeed.textFields = apiMySupportFeed.textFields;
    mySupportFeed.sortAscending = apiMySupportFeed.sortAscending;
    mySupportFeed.sortField = EntityFields.enumOrdinalOf(parseInt(apiMySupportFeed.sortField, 10));
    mySupportFeed.entityType = EntityTypes.enumOrdinalOf(parseInt(apiMySupportFeed.entityType, 10));
    mySupportFeed.assistBarButtons = EntityTypes.enumOrdinalOf(parseInt(apiMySupportFeed.assistBarButtons, 10));
    if (apiMySupportFeed.selfHelpGuide) mySupportFeed.selfHelpGuide = SelfHelpGuideItem.fromApiEntity(apiMySupportFeed.selfHelpGuide);
    if (apiMySupportFeed.accessCircle) mySupportFeed.accessCircle = AccessCircle.fromApiEntity(apiMySupportFeed.accessCircle);

    return mySupportFeed;
  }
}

export default MySupportFeed;

export type MySupportFeedType = {
  id: number,
  name: string;
  detailFields: string;
  textFields: string;
  sortAscending: string;
  sortField: EntityFields;
  entityType: EntityTypes;
  assistBarButtons: EntityTypes;
  selfHelpGuide: SelfHelpGuideItem;
  accessCircle: AccessCircle;
}

