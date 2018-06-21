import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View } from "native-base";

import styles from "./styles";
export interface Props {
	incidentFormForm: any,
	onSubmit: Function,
	navigation: any;
}
export interface State {}
class IncidentFormScreen extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Incident"}</Title>
					</Body>

					<Right />
				</Header>

				<Content>
					{this.props.incidentFormForm}
					<View padder>
						<Button block onPress={() => this.props.onSubmit()}>
							<Text>Submit</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default IncidentFormScreen;
