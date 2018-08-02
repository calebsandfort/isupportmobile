import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Spinner, List, ListItem } from "native-base";
import underscoreString from 'underscore.string';
import Dataset from 'impagination';
import moment from 'moment';
import { StackActions } from 'react-navigation';

import {UserManagementState} from '../../../../models';
import * as query from '../../../../models/entityQuery';
import {LoadSpanType} from '../../../../models/common';
import {iSupportService} from '../../../../services';
import {SupportRepresentative} from '../../../../models/Entities';
import {SupportRepresentativeLoadSpan} from '../../../../models/Entities/LoadSpans';
import {SupportRepresentativePropertyNames} from '../../../../models/Entities/PropertyNames';
import {SupportRepresentativeService} from '../../../../services';

import styles from "./styles";

export interface Props {
	navigation: any;
  userManagement: UserManagementState;
	onItemClick: Function;
}
export interface State {
	dataset: Dataset,
	datasetState: any
}
class RepList extends React.Component<Props, State> {
  itemClick: Function;

	constructor(props, context: any) {
    super(props, context);
    this.state = {
      dataset: null,
      datasetState: null,
    };
  }

	setupImpagination() {
    let _this = this;

    let loadSpan: SupportRepresentativeLoadSpan = new SupportRepresentativeLoadSpan();
    loadSpan.firstName = true;
    loadSpan.lastName = true;
    loadSpan.defaultGroupLoadSpan.name = true;

    const propertNames: SupportRepresentativePropertyNames = new SupportRepresentativePropertyNames();
    let sortExpression: string = `${propertNames.lastName}`;

		const pageSize = 15;
		const totalPages = Math.ceil(_this.props.totalRecords / pageSize);

		let dataset = new Dataset({
			pageSize: pageSize,
			loadHorizon: pageSize,
			observe(datasetState) {
        _this.setState({datasetState});
      },
			fetch(pageOffset, pageSize, stats){
				//stats.totalPages = totalPages;
				//console.log(pageOffset, pageSize, stats);
				//constructor(enablePaging:boolean = false, startRowIndex:number = 0, maximumRows:number = 0, sqlTimeout:number = 30, sortExpression:string = "")
				let q:query.EntityQuery = new query.EntityQuery(true, pageOffset * pageSize, pageSize, 30, sortExpression);

				return SupportRepresentativeService.executeGetCollection(
					null,
					q,
					loadSpan,
					{Identifier: _this.props.userManagement.authInfo.repId},
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

		let itemHeight = 54;
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
				<ListItem key={record.content.id} onPress={() => this.props.onItemClick(record.content)}>
					<Body>
						<Text>{`${record.content.firstName} ${record.content.lastName} (${record.content.defaultGroup.name})`}</Text>
					</Body>
					<Right>
            <Icon name="arrow-forward" />
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
						<Title>Select a Rep</Title>
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

export default RepList;
