//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ChangeTemplateLoadSpan from './ChangeTemplateLoadSpan';
import IncidentTemplateLoadSpan from './IncidentTemplateLoadSpan';
import PurchaseTemplateLoadSpan from './PurchaseTemplateLoadSpan';
import KnowledgeEntryLoadSpan from './KnowledgeEntryLoadSpan';
import FrequentlyAskedQuestionLoadSpan from './FrequentlyAskedQuestionLoadSpan';

export class SelfHelpGuideItemLoadSpan {
  displayText: boolean;
  helpInfoLabel: boolean;
  helpInfo: boolean;
  shippingIcon: boolean;
  customIcon: boolean;
  parent: SelfHelpGuideItemLoadSpan;
  changeTemplate: ChangeTemplateLoadSpan;
  incidentTemplate: IncidentTemplateLoadSpan;
  purchaseTemplate: PurchaseTemplateLoadSpan;
  knowledgeEntry: KnowledgeEntryLoadSpan;
  frequentlyAskedQuestion: FrequentlyAskedQuestionLoadSpan;

  constructor(){
    this.displayText = false;
    this.helpInfoLabel = false;
    this.helpInfo = false;
    this.shippingIcon = false;
    this.customIcon = false;
  }

  get parentLoadSpan(): SelfHelpGuideItemLoadSpan {
    if(!this.parent){
		this.parent = new SelfHelpGuideItemLoadSpan();
	}

    return this.parent;
  }

  get changeTemplateLoadSpan(): ChangeTemplateLoadSpan {
    if(!this.changeTemplate){
		this.changeTemplate = new ChangeTemplateLoadSpan();
	}

    return this.changeTemplate;
  }

  get incidentTemplateLoadSpan(): IncidentTemplateLoadSpan {
    if(!this.incidentTemplate){
		this.incidentTemplate = new IncidentTemplateLoadSpan();
	}

    return this.incidentTemplate;
  }

  get purchaseTemplateLoadSpan(): PurchaseTemplateLoadSpan {
    if(!this.purchaseTemplate){
		this.purchaseTemplate = new PurchaseTemplateLoadSpan();
	}

    return this.purchaseTemplate;
  }

  get knowledgeEntryLoadSpan(): KnowledgeEntryLoadSpan {
    if(!this.knowledgeEntry){
		this.knowledgeEntry = new KnowledgeEntryLoadSpan();
	}

    return this.knowledgeEntry;
  }

  get frequentlyAskedQuestionLoadSpan(): FrequentlyAskedQuestionLoadSpan {
    if(!this.frequentlyAskedQuestion){
		this.frequentlyAskedQuestion = new FrequentlyAskedQuestionLoadSpan();
	}

    return this.frequentlyAskedQuestion;
  }

  loadAllProperties() {
    this.displayText = true;
    this.helpInfoLabel = true;
    this.helpInfo = true;
    this.shippingIcon = true;
    this.customIcon = true;
  }
}

export default SelfHelpGuideItemLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
