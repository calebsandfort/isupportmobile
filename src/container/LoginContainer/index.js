// @flow
import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Item, Input, Icon, Toast, Form } from "native-base";
import {renderLoginInput} from '../../utilities/fieldRenderers';
import { Field, reduxForm, formValueSelector } from "redux-form";
import * as userManagementActions from "../../redux/modules/userManagement";
import Login from "../../stories/screens/Login";
import {UserManagementState, TokenRequest} from '../../models';

const required = value => (value ? undefined : "Required");

export interface Props {
  navigation: any,
  tokenRequest: TokenRequest,
  userManagement: UserManagementState,
  userManagementActions: any
}
export interface State {
  loadedStuff: boolean
}
class LoginForm extends React.Component<Props, State> {
  textInput: any;
  login: Function;

  constructor(props, context) {
    super(props, context);
    this.state = {loadedStuff: false};
    this.login = this.login.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (typeof (this.props.userManagement) !== "undefined"
      && this.props.userManagement.initial
      && this.props.userManagement.authenticated
      && !this.state.loadedStuff){
      this.setState({loadedStuff: true});
      this.props.navigation.navigate("Drawer");
      this.props.userManagementActions.setInitialFalse();
    }
    else if ((typeof (this.props.userManagement) === "undefined" || !this.props.userManagement.authenticated)
    && (typeof (nextProps.userManagement) !== "undefined" && nextProps.userManagement.authenticated)) {
      this.props.navigation.navigate("Drawer");
    }
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Item error={error && touched}>
        <Icon active name={input.name === "username" ? "person" : "unlock"} />
        <Input
          ref={c => (this.textInput = c)}
          placeholder={input.name === "username" ? "Username" : "Password"}
          secureTextEntry={input.name === "password" ? true : false}
          {...input}
        />
      </Item>
    );
  }

  login() {
    if (this.props.valid) {
      //this.props.navigation.navigate("Drawer");
      this.props.userManagementActions.authenticate(this.props.tokenRequest);
    } else {
      Toast.show({
        text: "Enter Valid Username & password!",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const form = (
      <Form>
        <Field
          name="username"
          component={renderLoginInput}
          validate={[required]}
        />
        <Field
          name="password"
          component={renderLoginInput}
          validate={[required]}
        />
      </Form>
    );
    return (
      <Login
        navigation={this.props.navigation}
        loginForm={form}
        onLogin={() => this.login()}
      />
    );
  }
}
const LoginContainer = reduxForm({
  form: "login"
})(LoginForm);

const mapDispatchToProps = dispatch => {
  return {
    userManagementActions: bindActionCreators(userManagementActions, dispatch)
  };
};

const selector = formValueSelector('login');

const mapStateToProps = state => ({
	userManagement: state.userManagement,
  tokenRequest: {
    username: selector(state, "username"),
    password: selector(state, "password"),
    grant_type: "password"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
