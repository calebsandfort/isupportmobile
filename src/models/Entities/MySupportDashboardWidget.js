//@flow
import EntityBase from './entityBase';
import MySupportDashboard from './MySupportDashboard';
import {MySupportDashboardWidgetTypes} from './Enums';
import {BootstrapStates} from './Enums';

export class MySupportDashboardWidget extends EntityBase {
  name: string;
  icon: string;
  height: string;
  showHeader: string;
  showBorder: string;
  refreshInterval: string;
  widgetType: MySupportDashboardWidgetTypes;
  bootstrapState: BootstrapStates;
  dashboard: MySupportDashboard;

  static fromApiEntity(apiMySupportDashboardWidget:MySupportDashboardWidgetType): MySupportDashboardWidget {
    let mySupportDashboardWidget = new MySupportDashboardWidget();
    mySupportDashboardWidget.id = apiMySupportDashboardWidget.id;
    mySupportDashboardWidget.name = apiMySupportDashboardWidget.name;
    mySupportDashboardWidget.icon = apiMySupportDashboardWidget.icon;
    mySupportDashboardWidget.height = apiMySupportDashboardWidget.height;
    mySupportDashboardWidget.showHeader = apiMySupportDashboardWidget.showHeader;
    mySupportDashboardWidget.showBorder = apiMySupportDashboardWidget.showBorder;
    mySupportDashboardWidget.refreshInterval = apiMySupportDashboardWidget.refreshInterval;
    mySupportDashboardWidget.widgetType = MySupportDashboardWidgetTypes.enumOrdinalOf(parseInt(apiMySupportDashboardWidget.widgetType, 10));
    mySupportDashboardWidget.bootstrapState = BootstrapStates.enumOrdinalOf(parseInt(apiMySupportDashboardWidget.bootstrapState, 10));
    if (apiMySupportDashboardWidget.dashboard) mySupportDashboardWidget.dashboard = MySupportDashboard.fromApiEntity(apiMySupportDashboardWidget.dashboard);

    return mySupportDashboardWidget;
  }
}

export default MySupportDashboardWidget;

export type MySupportDashboardWidgetType = {
  id: number,
  name: string;
  icon: string;
  height: string;
  showHeader: string;
  showBorder: string;
  refreshInterval: string;
  widgetType: MySupportDashboardWidgetTypes;
  bootstrapState: BootstrapStates;
  dashboard: MySupportDashboard;
}

