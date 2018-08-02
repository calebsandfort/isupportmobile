// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Dashboard from './container/DashboardContainer';
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import IncidentPage from "./container/Incident/Form";
import WorkItemList from './container/WorkItemListContainer';
import RepList from './container/Modals/RepListContainer';

const Drawer = DrawerNavigator(
	{
		Dashboard: { screen: Dashboard },
	},
	{
		initialRouteName: "Dashboard",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const AppStack = StackNavigator({
		Drawer: { screen: Drawer },
		WorkItemList: { screen: WorkItemList },
		NewIncident: { screen: IncidentPage },
		ExistingIncident: { screen: IncidentPage },
	},
	{
		headerMode: "none",
	}
);

const ModalsStack = StackNavigator({
		RepList: { screen: RepList },
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
		RepList: { screen: RepList },
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
