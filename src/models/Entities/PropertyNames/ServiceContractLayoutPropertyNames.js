//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import TutorialPropertyNames from './TutorialPropertyNames';

class ServiceContractLayoutPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get detailsLayout (): string {
    return super.resolvePropertyName("DetailsLayout");
  }
  get tabLayout (): string {
    return super.resolvePropertyName("TabLayout");
  }
  get tutorial (): TutorialPropertyNames {
    return new TutorialPropertyNames(super.resolvePropertyName("Tutorial"));
  }
}

export default ServiceContractLayoutPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
