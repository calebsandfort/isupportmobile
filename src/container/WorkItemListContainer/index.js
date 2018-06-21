// @flow
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import WorkItemList from '../../stories/screens/WorkItemList';
import type {WorkItemTypes} from '../../models/common';
import {UserManagementState} from '../../models';

export interface Props {
	navigation: any;
  userManagement: UserManagementState;
}
export interface State {
	workItemType: WorkItemTypes;
	totalRecords: number;
}

class WorkItemListContainer extends React.Component<Props, State> {
	constructor(props: Props, context: any) {
    super(props, context);
		this.state = {
			workItemType: props.navigation.state.params.workItemType,
			totalRecords: props.navigation.state.params.totalRecords
		}
  }

	render() {
		return <WorkItemList navigation={this.props.navigation}
			workItemType={this.state.workItemType}
			userManagement={this.props.userManagement}
			totalRecords={this.state.totalRecords} />;
	}
}

function bindAction(dispatch) {
	return { };
}

const mapStateToProps = state => ({
	userManagement: state.userManagement
});
export default connect(mapStateToProps, bindAction)(WorkItemListContainer);
