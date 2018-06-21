//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedChangePropertyNames from './ArchivedChangePropertyNames';

class ArchivedChangeCorrespondencePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get dateMessage (): string {
    return super.resolvePropertyName("DateMessage");
  }
  get subject (): string {
    return super.resolvePropertyName("Subject");
  }
  get priority (): string {
    return super.resolvePropertyName("Priority");
  }
  get from (): string {
    return super.resolvePropertyName("From");
  }
  get body (): string {
    return super.resolvePropertyName("Body");
  }
  get rep (): string {
    return super.resolvePropertyName("Rep");
  }
  get change (): ArchivedChangePropertyNames {
    return new ArchivedChangePropertyNames(super.resolvePropertyName("Change"));
  }
}

export default ArchivedChangeCorrespondencePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
