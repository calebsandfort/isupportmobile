// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Dashboard from './container/DashboardContainer';
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import NewIncident from "./container/Incident/Form";
import WorkItemList from './container/WorkItemListContainer';

const Drawer = DrawerNavigator(
	{
		Dashboard: { screen: Dashboard },
		NewIncident: { screen: NewIncident },
	},
	{
		initialRouteName: "Dashboard",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const AppStack = StackNavigator({
		Drawer: { screen: Drawer },
		WorkItemList: { screen: WorkItemList }
	},
	{
		headerMode: "none",
	}
);

const AuthStack = StackNavigator({
		Login: { screen: Login }
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

const App = StackNavigator(
	{
		AppStack: { screen: AppStack },
		AuthStack: { screen: AuthStack }
	},
	{
		initialRouteName: "AuthStack",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
