//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SocialClientThemeImageLoadSpan from './SocialClientThemeImageLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class SocialClientThemeLoadSpan extends LoadSpanBase {
  modifiedDate: boolean;
  widgetFontFamily: boolean;
  isDefault: boolean;
  bootstrapVariables: boolean;
  bootstrapCss: boolean;
  headerImage: SocialClientThemeImageLoadSpan;

  constructor(){
    super();
    this.modifiedDate = false;
    this.widgetFontFamily = false;
    this.isDefault = false;
    this.bootstrapVariables = false;
    this.bootstrapCss = false;
  }

  get headerImageLoadSpan(): SocialClientThemeImageLoadSpan {
    if(!this.headerImage){
		this.headerImage = new SocialClientThemeImageLoadSpan();
	}

    return this.headerImage;
  }

  loadAllProperties() {
    this.modifiedDate = true;
    this.widgetFontFamily = true;
    this.isDefault = true;
    this.bootstrapVariables = true;
    this.bootstrapCss = true;
  }
}

export default SocialClientThemeLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
