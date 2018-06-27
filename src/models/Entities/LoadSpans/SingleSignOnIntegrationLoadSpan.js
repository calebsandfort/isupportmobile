//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class SingleSignOnIntegrationLoadSpan extends LoadSpanBase {
  name: boolean;
  active: boolean;
  loginButtonText: boolean;
  issuer: boolean;
  singleSignOnUrl: boolean;
  x509Certificate: boolean;
  targetType: boolean;

  constructor(){
    super();
    this.name = false;
    this.active = false;
    this.loginButtonText = false;
    this.issuer = false;
    this.singleSignOnUrl = false;
    this.x509Certificate = false;
    this.targetType = false;
  }

  loadAllProperties() {
    this.name = true;
    this.active = true;
    this.loginButtonText = true;
    this.issuer = true;
    this.singleSignOnUrl = true;
    this.x509Certificate = true;
    this.targetType = true;
  }
}

export default SingleSignOnIntegrationLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
