//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import LocationLoadSpan from './LocationLoadSpan';
import EndUserDesktopDefinitionLoadSpan from './EndUserDesktopDefinitionLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class GroupLoadSpan extends LoadSpanBase {
  name: boolean;
  description: boolean;
  tag: boolean;
  groupType: boolean;
  location: LocationLoadSpan;
  defaultSocialClient: EndUserDesktopDefinitionLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.description = false;
    this.tag = false;
    this.groupType = false;
  }

  get locationLoadSpan(): LocationLoadSpan {
    if(!this.location){
		this.location = new LocationLoadSpan();
	}

    return this.location;
  }

  get defaultSocialClientLoadSpan(): EndUserDesktopDefinitionLoadSpan {
    if(!this.defaultSocialClient){
		this.defaultSocialClient = new EndUserDesktopDefinitionLoadSpan();
	}

    return this.defaultSocialClient;
  }

  loadAllProperties() {
    this.name = true;
    this.description = true;
    this.tag = true;
    this.groupType = true;
  }
}

export default GroupLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
