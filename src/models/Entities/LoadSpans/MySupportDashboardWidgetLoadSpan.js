//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import MySupportDashboardLoadSpan from './MySupportDashboardLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class MySupportDashboardWidgetLoadSpan extends LoadSpanBase {
  name: boolean;
  icon: boolean;
  height: boolean;
  showHeader: boolean;
  showBorder: boolean;
  refreshInterval: boolean;
  widgetType: boolean;
  bootstrapState: boolean;
  dashboard: MySupportDashboardLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.icon = false;
    this.height = false;
    this.showHeader = false;
    this.showBorder = false;
    this.refreshInterval = false;
    this.widgetType = false;
    this.bootstrapState = false;
  }

  get dashboardLoadSpan(): MySupportDashboardLoadSpan {
    if(!this.dashboard){
		this.dashboard = new MySupportDashboardLoadSpan();
	}

    return this.dashboard;
  }

  loadAllProperties() {
    this.name = true;
    this.icon = true;
    this.height = true;
    this.showHeader = true;
    this.showBorder = true;
    this.refreshInterval = true;
    this.widgetType = true;
    this.bootstrapState = true;
  }
}

export default MySupportDashboardWidgetLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
