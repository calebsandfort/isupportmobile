//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SelfHelpGuideItemPropertyNames from './SelfHelpGuideItemPropertyNames';
import AccessCirclePropertyNames from './AccessCirclePropertyNames';

class MySupportFeedPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get detailFields (): string {
    return super.resolvePropertyName("DetailFields");
  }
  get textFields (): string {
    return super.resolvePropertyName("TextFields");
  }
  get sortAscending (): string {
    return super.resolvePropertyName("SortAscending");
  }
  get sortField (): string {
    return super.resolvePropertyName("SortField");
  }
  get entityType (): string {
    return super.resolvePropertyName("EntityType");
  }
  get assistBarButtons (): string {
    return super.resolvePropertyName("AssistBarButtons");
  }
  get selfHelpGuide (): SelfHelpGuideItemPropertyNames {
    return new SelfHelpGuideItemPropertyNames(super.resolvePropertyName("SelfHelpGuide"));
  }
  get accessCircle (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("AccessCircle"));
  }
}

export default MySupportFeedPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
