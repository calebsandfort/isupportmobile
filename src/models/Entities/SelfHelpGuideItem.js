//@flow
import EntityBase from './entityBase';
import ChangeTemplate from './ChangeTemplate';
import IncidentTemplate from './IncidentTemplate';
import PurchaseTemplate from './PurchaseTemplate';
import KnowledgeEntry from './KnowledgeEntry';
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion';

export class SelfHelpGuideItem extends EntityBase {
  displayText: string;
  helpInfoLabel: string;
  helpInfo: string;
  shippingIcon: string;
  customIcon: string;
  parent: SelfHelpGuideItem;
  changeTemplate: ChangeTemplate;
  incidentTemplate: IncidentTemplate;
  purchaseTemplate: PurchaseTemplate;
  knowledgeEntry: KnowledgeEntry;
  frequentlyAskedQuestion: FrequentlyAskedQuestion;

  static fromApiEntity(apiSelfHelpGuideItem:SelfHelpGuideItemType): SelfHelpGuideItem {
    let selfHelpGuideItem = new SelfHelpGuideItem();
    selfHelpGuideItem.id = apiSelfHelpGuideItem.id;
    selfHelpGuideItem.displayText = apiSelfHelpGuideItem.displayText;
    selfHelpGuideItem.helpInfoLabel = apiSelfHelpGuideItem.helpInfoLabel;
    selfHelpGuideItem.helpInfo = apiSelfHelpGuideItem.helpInfo;
    selfHelpGuideItem.shippingIcon = apiSelfHelpGuideItem.shippingIcon;
    selfHelpGuideItem.customIcon = apiSelfHelpGuideItem.customIcon;
    if (apiSelfHelpGuideItem.parent) selfHelpGuideItem.parent = SelfHelpGuideItem.fromApiEntity(apiSelfHelpGuideItem.parent);
    if (apiSelfHelpGuideItem.changeTemplate) selfHelpGuideItem.changeTemplate = ChangeTemplate.fromApiEntity(apiSelfHelpGuideItem.changeTemplate);
    if (apiSelfHelpGuideItem.incidentTemplate) selfHelpGuideItem.incidentTemplate = IncidentTemplate.fromApiEntity(apiSelfHelpGuideItem.incidentTemplate);
    if (apiSelfHelpGuideItem.purchaseTemplate) selfHelpGuideItem.purchaseTemplate = PurchaseTemplate.fromApiEntity(apiSelfHelpGuideItem.purchaseTemplate);
    if (apiSelfHelpGuideItem.knowledgeEntry) selfHelpGuideItem.knowledgeEntry = KnowledgeEntry.fromApiEntity(apiSelfHelpGuideItem.knowledgeEntry);
    if (apiSelfHelpGuideItem.frequentlyAskedQuestion) selfHelpGuideItem.frequentlyAskedQuestion = FrequentlyAskedQuestion.fromApiEntity(apiSelfHelpGuideItem.frequentlyAskedQuestion);

    return selfHelpGuideItem;
  }
}

export default SelfHelpGuideItem;

export type SelfHelpGuideItemType = {
  id: number,
  displayText: string;
  helpInfoLabel: string;
  helpInfo: string;
  shippingIcon: string;
  customIcon: string;
  parent: SelfHelpGuideItem;
  changeTemplate: ChangeTemplate;
  incidentTemplate: IncidentTemplate;
  purchaseTemplate: PurchaseTemplate;
  knowledgeEntry: KnowledgeEntry;
  frequentlyAskedQuestion: FrequentlyAskedQuestion;
}

