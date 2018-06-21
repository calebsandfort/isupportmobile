// @flow
import * as React from "react";
import {connect} from "react-redux";
import Dashboard from "../../stories/screens/Dashboard";
import {UserManagementState} from '../../models';

export interface Props {
	navigation: any;
	userManagement: UserManagementState;
}
export interface State {}
class DashboardContainer extends React.Component<Props, State> {
	render() {
		return <Dashboard navigation={this.props.navigation} userManagement={this.props.userManagement} />;
	}
}

function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({
	userManagement: state.userManagement
});
export default connect(mapStateToProps, bindAction)(DashboardContainer);
