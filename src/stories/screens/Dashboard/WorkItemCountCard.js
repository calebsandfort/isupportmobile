import * as React from "react";

import {
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Card,
  CardItem
} from "native-base";

import {WorkItemTypes} from "../../../models";

const capitalize = require("underscore.string/capitalize");

import styles from "./WorkItemCountCard.styles";
import workItemStyles from "../../../theme/workItemStyles";

export interface Props {
  navigation: any;
	count: number;
  workItemType: WorkItemTypes;
  icon: string;
}
export interface State {}

class WorkItemCountCard extends React.Component<Props, State> {
  render() {
    return (
      <Card>
        <CardItem>
          <Left style={styles.wideLeft}>
            <Icon name={this.props.icon} style={[workItemStyles[this.props.workItemType], styles.countCardIcon]} />
            <Body>
              <Text>{capitalize(this.props.workItemType)}</Text>
              <Text note>{`You have ${this.props.count} ${this.props.workItemType}s`}</Text>
            </Body>
          </Left>
          <Right>
            <Button iconRight transparent primary>
              <Icon name="arrow-forward" style={{fontSize: 40}}
              onPress={() =>
                this.props.navigation.navigate("WorkItemList", {
                  workItemType: this.props.workItemType,
                  totalRecords: this.props.count
                })} />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default WorkItemCountCard;
