// @flow
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Item, Input, Icon, Toast, Form, Picker, Label } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import * as fieldRenderers from '../../../utilities/fieldRenderers';
import { Field, reduxForm, formValueSelector } from "redux-form";
import * as incidentSettingsActions from "../../../redux/modules/incidentSettings";
import IncidentFormScreen from '../../../stories/screens/Incident/Form';
import {UserManagementState, IncidentSettingsState} from '../../../models';
import {IncidentLoadSpan} from '../../../models/Entities/LoadSpans';

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
	repClick: Function;

	constructor(props, context) {
    super(props, context);
    this.submit = this.submit.bind(this);
    this.repClick = this.repClick.bind(this);
  }

	componentDidMount() {
		const id: number = parseInt(this.props.navigation.getParam('id', '0'));
		if(id > 0){
			const loadSpan:IncidentLoadSpan = new IncidentLoadSpan();
			loadSpan.number = true;
			loadSpan.createdDate = true;
			loadSpan.priority = true;
			loadSpan.assigneeLoadSpan.firstName = true;
			loadSpan.assigneeLoadSpan.lastName = true;
			loadSpan.statusLoadSpan.id = true;
			this.props.incidentSettingsActions.getExisting(id, loadSpan, this.props.userManagement.authInfo.access_token);
		}
		else{
			this.props.incidentSettingsActions.initNew(this.props.userManagement.authInfo.repId, this.props.userManagement.authInfo.access_token);
		}
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

	repClick(field: string) {
		this.props.navigation.navigate("RepList", {
			field: field
		});
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
				<Grid style={{left: 15, alignItems: 'center'}}>
			    <Col style={{ width: 129 }}><Label style={{color: '#575757'}}>Status</Label></Col>
			    <Col>
						<Field name="status.idString" mode="dropdown" component={fieldRenderers.renderSelect} label="Status" >
							{this.props.incidentSettings.statuses.map((status) =>
			          <Picker.Item key={status.idString} label={status.label} value={status.idString} />
			        )}
		        </Field>
				</Col>
				</Grid>

				<Item />
				<Field
					name="assignee.displayName"
					component={fieldRenderers.renderReadonlyInput}
					label="Assignee"
					icon="person"
					iconClick={() => this.repClick('assignee')}
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
	enableReinitialize: true,
	keepDirtyOnReinitialize: true
})(IncidentForm);

function bindAction(dispatch) {
	return {
    incidentSettingsActions: bindActionCreators(incidentSettingsActions, dispatch)
  };
}

const mapStateToProps = state => ({
	userManagement: state.userManagement,
	incidentSettings: state.incidentSettings,
	initialValues: state.incidentSettings.incident
});
export default connect(mapStateToProps, bindAction)(IncidentContainer);
