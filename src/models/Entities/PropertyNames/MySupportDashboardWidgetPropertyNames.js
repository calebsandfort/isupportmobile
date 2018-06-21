//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import MySupportDashboardPropertyNames from './MySupportDashboardPropertyNames';

class MySupportDashboardWidgetPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get icon (): string {
    return super.resolvePropertyName("Icon");
  }
  get height (): string {
    return super.resolvePropertyName("Height");
  }
  get showHeader (): string {
    return super.resolvePropertyName("ShowHeader");
  }
  get showBorder (): string {
    return super.resolvePropertyName("ShowBorder");
  }
  get refreshInterval (): string {
    return super.resolvePropertyName("RefreshInterval");
  }
  get widgetType (): string {
    return super.resolvePropertyName("WidgetType");
  }
  get bootstrapState (): string {
    return super.resolvePropertyName("BootstrapState");
  }
  get dashboard (): MySupportDashboardPropertyNames {
    return new MySupportDashboardPropertyNames(super.resolvePropertyName("Dashboard"));
  }
}

export default MySupportDashboardWidgetPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
