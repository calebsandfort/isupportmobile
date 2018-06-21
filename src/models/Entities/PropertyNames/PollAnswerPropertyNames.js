//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import PollPropertyNames from './PollPropertyNames';

class PollAnswerPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get answer (): string {
    return super.resolvePropertyName("Answer");
  }
  get poll (): PollPropertyNames {
    return new PollPropertyNames(super.resolvePropertyName("Poll"));
  }
}

export default PollAnswerPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
