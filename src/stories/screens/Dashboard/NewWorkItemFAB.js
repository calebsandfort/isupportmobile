import * as React from "react";

import {
  Button,
  Icon,
  Fab
} from "native-base";

// import {WorkItemTypes} from "../../../models";
// import workItemStyles from "../../../theme/workItemStyles";
import styles from "./NewWorkItemFAB.styles";

export interface Props {
  navigateClick: Function
}
export interface State {
  active: boolean
}

class NewWorkItemFAB extends React.Component<Props, State> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => this.setState({ active: !this.state.active })}>
        <Icon name="share" />
        <Button style={{ backgroundColor: '#F9B922'}} onPress={() => this.props.navigateClick('incident')}>
          <Icon name="warning" style={ styles.icon } />
        </Button>
        <Button style={{ backgroundColor: '#FF2000' }} onPress={() => this.props.navigateClick('problem')}>
          <Icon name="alert" style={ styles.icon } />
        </Button>
        <Button style={{ backgroundColor: '#6EAF6C' }} onPress={() => this.props.navigateClick('change')}>
          <Icon name="add-circle" style={ styles.icon } />
        </Button>
      </Fab>
    );
  }
}

export default NewWorkItemFAB;
