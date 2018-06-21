// @flow
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Item, Input, Icon, Toast, Form, Picker, Label } from "native-base";
import * as fieldRenderers from '../../../utilities/fieldRenderers';
import { Field, reduxForm, formValueSelector } from "redux-form";
import * as incidentSettingsActions from "../../../redux/modules/incidentSettings";
import IncidentFormScreen from '../../../stories/screens/Incident/Form';
import {UserManagementState, IncidentSettingsState} from '../../../models';

export interface Props {
	navigation: any,
  userManagement: UserManagementState,
  incidentSettings: IncidentSettingsState,
  incidentSettingsActions: any
}
export interface State {}

class IncidentForm extends React.Component<Props, State> {
  textInput: any;
	submit: Function;
	assigneeClick: Function;

	constructor(props, context) {
    super(props, context);

    this.submit = this.submit.bind(this);
    this.assigneeClick = this.assigneeClick.bind(this);
  }

	componentDidMount() {
		this.props.incidentSettingsActions.initNew(this.props.userManagement.authInfo.repId, this.props.userManagement.authInfo.access_token);
	}

	submit() {
    // if (this.props.valid) {
    //   //this.props.navigation.navigate("Drawer");
    //   this.props.userManagementActions.authenticate(this.props.tokenRequest);
    // } else {
    //   Toast.show({
    //     text: "Enter Valid Username & password!",
    //     duration: 2000,
    //     position: "top",
    //     textStyle: { textAlign: "center" }
    //   });
    // }
  }

	assigneeClick() {
		alert("assigneeClick");
	}

  render() {
		const form = (
			<Form>
				<Field
					name="number"
					component={fieldRenderers.renderReadonlyInput}
					label="Number"
				/>
				<Field
					name="createdDate"
					component={fieldRenderers.renderReadonlyInput}
					label="Created"
					format={fieldRenderers.dateFormatter}
				/>
				<Field name="status.idString" mode="dropdown" component={fieldRenderers.renderSelect} style={{left: 10}} label="Status" >
					{this.props.incidentSettings.statuses.map((status) =>
	          <Picker.Item key={status.idString} label={status.label} value={status.idString} />
	        )}
        </Field>
				<Item />
				<Field
					name="assignee.displayName"
					component={fieldRenderers.renderReadonlyInput}
					label="Assignee"
					icon="person"
					iconClick={() => this.assigneeClick()}
				/>
			</Form>
		);

		return <IncidentFormScreen
			navigation={this.props.navigation}
			incidentFormForm={form}
			onSubmit={() => this.submit()}
		 />;
	}
}
const IncidentContainer = reduxForm({
  form: "incident",
	enableReinitialize: true
})(IncidentForm);

function bindAction(dispatch) {
	return {
    incidentSettingsActions: bindActionCreators(incidentSettingsActions, dispatch)
  };
}

const mapStateToProps = state => ({
	userManagement: state.userManagement,
	incidentSettings: state.incidentSettings,
	initialValues: state.incidentSettings.newIncident
});
export default connect(mapStateToProps, bindAction)(IncidentContainer);
