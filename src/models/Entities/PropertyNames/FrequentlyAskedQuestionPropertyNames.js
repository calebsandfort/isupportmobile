//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import FrequentlyAskedQuestionTopicPropertyNames from './FrequentlyAskedQuestionTopicPropertyNames';

class FrequentlyAskedQuestionPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get question (): string {
    return super.resolvePropertyName("Question");
  }
  get answer (): string {
    return super.resolvePropertyName("Answer");
  }
  get dateCreated (): string {
    return super.resolvePropertyName("DateCreated");
  }
  get availableToReps (): string {
    return super.resolvePropertyName("AvailableToReps");
  }
  get availableToCustomers (): string {
    return super.resolvePropertyName("AvailableToCustomers");
  }
  get position (): string {
    return super.resolvePropertyName("Position");
  }
  get userBrowser (): string {
    return super.resolvePropertyName("UserBrowser");
  }
  get userDevice (): string {
    return super.resolvePropertyName("UserDevice");
  }
  get topic (): FrequentlyAskedQuestionTopicPropertyNames {
    return new FrequentlyAskedQuestionTopicPropertyNames(super.resolvePropertyName("Topic"));
  }
}

export default FrequentlyAskedQuestionPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
