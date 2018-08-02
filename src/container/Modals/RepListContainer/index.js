// @flow
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as incidentSettingsActions from "../../../redux/modules/incidentSettings";
import RepList from '../../../stories/screens/Modals/RepList';
import {UserManagementState, UpdateRepFieldRequest} from '../../../models';
import {SupportRepresentative} from '../../../models/Entities';

export interface Props {
	navigation: any;
  userManagement: UserManagementState;
  incidentSettingsActions: any;
}
export interface State {
	field: string;
}

class RepListContainer extends React.Component<Props, State> {
	itemClick: Function;

	constructor(props: Props, context: any) {
    super(props, context);
		this.state = {
			field: this.props.navigation.getParam('field', '')
		}

    this.itemClick = this.itemClick.bind(this);
  }

	itemClick(rep: SupportRepresentative){
		if(this.state.field != ''){
			let request = {};
			request.field = this.state.field;
			request.rep = rep;

			this.props.incidentSettingsActions.updateRepField(request);
		}

		this.props.navigation.goBack();
	}

	render() {
		return <RepList navigation={this.props.navigation}
			userManagement={this.props.userManagement}
			onItemClick={this.itemClick} />;
	}
}

function bindAction(dispatch) {
	return {
    incidentSettingsActions: bindActionCreators(incidentSettingsActions, dispatch)
  };
}

const mapStateToProps = state => ({
	userManagement: state.userManagement
});

export default connect(mapStateToProps, bindAction)(RepListContainer);
