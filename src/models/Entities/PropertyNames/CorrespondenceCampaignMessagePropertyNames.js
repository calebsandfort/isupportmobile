//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CorrespondencePropertyNames from './CorrespondencePropertyNames';

class CorrespondenceCampaignMessagePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get result (): string {
    return super.resolvePropertyName("Result");
  }
  get correspondence (): CorrespondencePropertyNames {
    return new CorrespondencePropertyNames(super.resolvePropertyName("Correspondence"));
  }
}

export default CorrespondenceCampaignMessagePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
