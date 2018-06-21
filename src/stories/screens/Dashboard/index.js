import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import WorkItemCountCard from "./WorkItemCountCard";
import HeadlineList from "./HeadlineList";
import NewWorkItemFAB from './NewWorkItemFAB';
import {WorkItemTypes} from "../../../models";

import {UserManagementState} from '../../../models';

import styles from "./styles";

export interface Props {
  navigation: any;
	userManagement: UserManagementState;
}
export interface State {}
class Dashboard extends React.Component<Props, State> {
  fabNavigate: Function;

  constructor(props, context) {
    super(props, context);

    this.fabNavigate = this.fabNavigate.bind(this);
  }

  fabNavigate(workItemType: WorkItemTypes){
    this.props.navigation.navigate("NewIncident");
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Dashboard</Title>
          </Body>
        </Header>
        <Content>
          {this.props.userManagement.incidentCount > 0 && <WorkItemCountCard
            navigation={this.props.navigation}
            count={this.props.userManagement.incidentCount}
            workItemType="incident"
            icon="warning" />
          }
          {this.props.userManagement.problemCount > 0 && <WorkItemCountCard
            navigation={this.props.navigation}
            count={this.props.userManagement.problemCount}
            workItemType="problem"
            icon="alert" />
          }
          {this.props.userManagement.changeCount > 0 && <WorkItemCountCard
            navigation={this.props.navigation}
            count={this.props.userManagement.changeCount}
            workItemType="change"
            icon="add-circle" />
          }
          <HeadlineList/>
        </Content>
        <NewWorkItemFAB navigateClick={this.fabNavigate} />
      </Container>
    );
  }
}

export default Dashboard;
