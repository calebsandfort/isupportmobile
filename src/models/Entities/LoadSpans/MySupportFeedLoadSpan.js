//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SelfHelpGuideItemLoadSpan from './SelfHelpGuideItemLoadSpan';
import AccessCircleLoadSpan from './AccessCircleLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class MySupportFeedLoadSpan extends LoadSpanBase {
  name: boolean;
  detailFields: boolean;
  textFields: boolean;
  sortAscending: boolean;
  sortField: boolean;
  entityType: boolean;
  assistBarButtons: boolean;
  selfHelpGuide: SelfHelpGuideItemLoadSpan;
  accessCircle: AccessCircleLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.detailFields = false;
    this.textFields = false;
    this.sortAscending = false;
    this.sortField = false;
    this.entityType = false;
    this.assistBarButtons = false;
  }

  get selfHelpGuideLoadSpan(): SelfHelpGuideItemLoadSpan {
    if(!this.selfHelpGuide){
		this.selfHelpGuide = new SelfHelpGuideItemLoadSpan();
	}

    return this.selfHelpGuide;
  }

  get accessCircleLoadSpan(): AccessCircleLoadSpan {
    if(!this.accessCircle){
		this.accessCircle = new AccessCircleLoadSpan();
	}

    return this.accessCircle;
  }

  loadAllProperties() {
    this.name = true;
    this.detailFields = true;
    this.textFields = true;
    this.sortAscending = true;
    this.sortField = true;
    this.entityType = true;
    this.assistBarButtons = true;
  }
}

export default MySupportFeedLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
