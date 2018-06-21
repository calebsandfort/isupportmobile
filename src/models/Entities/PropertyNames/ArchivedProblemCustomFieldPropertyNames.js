//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedProblemPropertyNames from './ArchivedProblemPropertyNames';

class ArchivedProblemCustomFieldPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get value (): string {
    return super.resolvePropertyName("Value");
  }
  get label (): string {
    return super.resolvePropertyName("Label");
  }
  get problem (): ArchivedProblemPropertyNames {
    return new ArchivedProblemPropertyNames(super.resolvePropertyName("Problem"));
  }
}

export default ArchivedProblemCustomFieldPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
