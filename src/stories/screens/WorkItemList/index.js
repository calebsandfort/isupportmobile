import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Spinner, List, ListItem } from "native-base";
import underscoreString from 'underscore.string';
import Dataset from 'impagination';
import moment from 'moment';

import {UserManagementState} from '../../../models';
import * as query from '../../../models/entityQuery';
import {LoadSpanType} from '../../../models/common';
import {iSupportService} from '../../../services';
import {Incident} from '../../../models/Entities';
import {IncidentLoadSpan} from '../../../models/Entities/LoadSpans';
import {IncidentPropertyNames} from '../../../models/Entities/PropertyNames';
import {Problem} from '../../../models/Entities';
import {ProblemLoadSpan} from '../../../models/Entities/LoadSpans';
import {ProblemPropertyNames} from '../../../models/Entities/PropertyNames';
import {Change} from '../../../models/Entities';
import {ChangeLoadSpan} from '../../../models/Entities/LoadSpans';
import {ChangePropertyNames} from '../../../models/Entities/PropertyNames';

import styles from "./styles";

export interface Props {
	navigation: any;
  workItemType: WorkItemTypes;
  userManagement: UserManagementState;
	totalRecords: number;
}
export interface State {
	dataset: Dataset,
	datasetState: any
}
class WorkItemList extends React.Component<Props, State> {
	constructor(props, context: any) {
    super(props, context);

    this.state = {
      dataset: null,
      datasetState: null,
    };
  }

	setupImpagination() {
    let _this = this;

		let loadSpan: LoadSpanType;
		let mapFunc: () => mixed;
		let sortExpression: string;

		switch(_this.props.workItemType){
			case 'incident':
				loadSpan = new IncidentLoadSpan();
				loadSpan.number = true;
				loadSpan.createdDate = true;
				loadSpan.priority = true;
				loadSpan.statusLoadSpan.label = true;

				mapFunc = Incident.fromApiEntity;

				const propertNames = new IncidentPropertyNames();
				sortExpression = `${propertNames.createdDate} desc`;
			break;
		}

		const pageSize = 15;
		const totalPages = Math.ceil(_this.props.totalRecords / pageSize);

		let dataset = new Dataset({
			pageSize: pageSize,
			loadHorizon: pageSize,
			observe(datasetState) {
        _this.setState({datasetState});
      },
			fetch(pageOffset, pageSize, stats){
				stats.totalPages = totalPages;
				//console.log(pageOffset, pageSize, stats);
				//constructor(enablePaging:boolean = false, startRowIndex:number = 0, maximumRows:number = 0, sqlTimeout:number = 30, sortExpression:string = "")
				let q:query.EntityQuery = new query.EntityQuery(true, pageOffset * pageSize, pageSize, 30, sortExpression);

				return iSupportService.executeGetCollection(
					_this.props.workItemType,
					null,
					q,
					loadSpan,
					{Identifier: _this.props.userManagement.authInfo.repId},
					mapFunc,
					_this.props.userManagement.authInfo.access_token)
					.then(response => response.collection)
					.catch((error) => {
            console.error(error.message);
          });
			}
		});

		dataset.setReadOffset(0);
    this.setState({dataset});
	}

	setCurrentReadOffset = (event) => {
    // Log the current scroll position in the list in pixels
    //console.log(event.nativeEvent.contentOffset.y);

		let itemHeight = 70;
    let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
    let currentItemIndex = Math.ceil(currentOffset / itemHeight);
    this.state.dataset.setReadOffset(currentItemIndex);
  }

	componentWillMount() {
    this.setupImpagination();
  }

	renderItem() {
    return this.state.datasetState.map(record => {
      if(record.isPending && !record.isSettled) {
        return <Spinner color="#00C497" key={Math.random()}/>;
      }

      return (
				<ListItem key={record.content.id} onPress={() =>
						alert(record.content.id)
					}>
					<Body>
						<Text>{record.content.number}</Text>
						<Text note>
							{`Status is ${record.content.status.label}, Priority is ${record.content.priority.display}`}
						</Text>
					</Body>
					<Right>
						<Text note>{moment(record.content.createdDate).fromNow()}</Text>
					</Right>
				</ListItem>
      );
    });
  }

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{underscoreString(this.props.workItemType).capitalize().value()}</Title>
					</Body>

					<Right />
				</Header>

				<Content scrollEventThrottle={300} onScroll={this.setCurrentReadOffset} removeClippedSubviews={true}>
					<List>
						{this.renderItem()}
					</List>
				</Content>
			</Container>
		);
	}
}

export default WorkItemList;
