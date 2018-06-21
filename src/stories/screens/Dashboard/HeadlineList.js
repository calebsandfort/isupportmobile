import * as React from "react";

import {
  Card,
  CardItem,
  Left,
  Icon,
  Right,
  Text
} from "native-base";

import {HeadlineService} from "../../../services";
import CollectionResponse from "../../../models";
import styles from "./WorkItemCountCard.styles";
import {HeadlineType} from "../../../models/Entities";

export interface Props {}
export interface State {
  headlines: HeadlineType
}

class HeadlineList extends React.Component<Props, State> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      headlines: []
    };
  }

  componentDidMount() {
    HeadlineService.getActiveHeadlines().then((response:CollectionResponse) => {
      this.setState({
        headlines: response.collection
      });
    });
  }

  render() {
    return (
      <Card>
        <CardItem header bordered>
          <Text>Headlines</Text>
        </CardItem>
        {this.state.headlines.map((headline:HeadlineType) =>
          <CardItem key={headline.id}>
            <Left style={styles.wideLeft}>
              <Text>{headline.message}</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>

        )}
      </Card>
    );
  }
}

export default HeadlineList;
