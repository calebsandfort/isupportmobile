//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ChangeTemplatePropertyNames from './ChangeTemplatePropertyNames';
import IncidentTemplatePropertyNames from './IncidentTemplatePropertyNames';
import PurchaseTemplatePropertyNames from './PurchaseTemplatePropertyNames';
import KnowledgeEntryPropertyNames from './KnowledgeEntryPropertyNames';
import FrequentlyAskedQuestionPropertyNames from './FrequentlyAskedQuestionPropertyNames';

class SelfHelpGuideItemPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get displayText (): string {
    return super.resolvePropertyName("DisplayText");
  }
  get helpInfoLabel (): string {
    return super.resolvePropertyName("HelpInfoLabel");
  }
  get helpInfo (): string {
    return super.resolvePropertyName("HelpInfo");
  }
  get shippingIcon (): string {
    return super.resolvePropertyName("ShippingIcon");
  }
  get customIcon (): string {
    return super.resolvePropertyName("CustomIcon");
  }
  get parent (): SelfHelpGuideItemPropertyNames {
    return new SelfHelpGuideItemPropertyNames(super.resolvePropertyName("Parent"));
  }
  get changeTemplate (): ChangeTemplatePropertyNames {
    return new ChangeTemplatePropertyNames(super.resolvePropertyName("ChangeTemplate"));
  }
  get incidentTemplate (): IncidentTemplatePropertyNames {
    return new IncidentTemplatePropertyNames(super.resolvePropertyName("IncidentTemplate"));
  }
  get purchaseTemplate (): PurchaseTemplatePropertyNames {
    return new PurchaseTemplatePropertyNames(super.resolvePropertyName("PurchaseTemplate"));
  }
  get knowledgeEntry (): KnowledgeEntryPropertyNames {
    return new KnowledgeEntryPropertyNames(super.resolvePropertyName("KnowledgeEntry"));
  }
  get frequentlyAskedQuestion (): FrequentlyAskedQuestionPropertyNames {
    return new FrequentlyAskedQuestionPropertyNames(super.resolvePropertyName("FrequentlyAskedQuestion"));
  }
}

export default SelfHelpGuideItemPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
