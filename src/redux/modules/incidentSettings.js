//@flow
import { loop, Cmd } from 'redux-loop';
import { Incident } from '../../models/Entities';
import { IncidentStatusPropertyNames } from '../../models/Entities/PropertyNames';
import { IncidentStatusLoadSpan } from '../../models/Entities/LoadSpans';
import { IncidentStatusTypes } from '../../models/Entities/Enums';
import { IncidentStatusService, IncidentService } from '../../services';
import { IncidentSettingsState, InitNewIncidentRequest, ServiceError, CollectionResponse, EntityQuery, SearchFilter, SearchFilterCondition } from '../../models';

const initialState: IncidentSettingsState = {
  statusesLoaded: false,
  statuses: [],
  newIncident: {
    number: ''
  }
};

const INIT = 'iSupport/incidentSettings/INIT';

type InitAction = { type: "iSupport/incidentSettings/INIT", access_token: string }

export function init(access_token: string): InitAction {
  return { type: INIT, access_token: access_token };
}

const GET_STATUSES = 'iSupport/incidentSettings/GET_STATUSES';
const GET_STATUSES_SUCCESS = 'iSupport/incidentSettings/GET_STATUSES_SUCCESS';
const GET_STATUSES_FAIL = 'iSupport/incidentSettings/GET_STATUSES_FAIL';

type GetStatusesAction = { type: "iSupport/incidentSettings/GET_STATUSES", access_token: string }
type GetStatusesSuccessAction = { type: "iSupport/incidentSettings/GET_STATUSES_SUCCESS", collectionResponse: CollectionResponse }
type GetStatusesFailAction = { type: "iSupport/incidentSettings/GET_STATUSES_FAIL", error: ServiceError };

export function getStatuses(access_token: string): GetStatusesAction {
  return { type: GET_STATUSES, access_token: access_token };
}

export function getStatusesSuccess(collectionResponse: CollectionResponse): GetStatusesSuccessAction {
  return { type: GET_STATUSES_SUCCESS, collectionResponse: collectionResponse };
}

export function getStatusesFailed(error: ServiceError): GetStatusesFailAction {
  return { type: GET_STATUSES_FAIL, error: error.message };
}

const INIT_NEW = 'iSupport/incidentSettings/INIT_NEW';
const INIT_NEW_SUCCESS = 'iSupport/incidentSettings/INIT_NEW_SUCCESS';
const INIT_NEW_FAIL = 'iSupport/incidentSettings/INIT_NEW_FAIL';

type InitNewAction = { type: "iSupport/incidentSettings/INIT_NEW", request: InitNewIncidentRequest }
type InitNewSuccessAction = { type: "iSupport/incidentSettings/INIT_NEW_SUCCESS", response: Incident }
type InitNewFailAction = { type: "iSupport/incidentSettings/INIT_NEW_FAIL", error: ServiceError };

export function initNew(repId: number, access_token: string): InitNewAction {
  let request = new InitNewIncidentRequest();
  request.rep = {Identifier: repId};
  request.access_token = access_token;

  return { type: INIT_NEW, request: request };
}

export function initNewSuccess(response: Incident): InitNewSuccessAction {
  return { type: INIT_NEW_SUCCESS, response: response };
}

export function initNewFailed(error: ServiceError): InitNewFailAction {
  return { type: INIT_NEW_FAIL, error: error.message };
}

type Action = InitAction | GetStatusesAction | GetStatusesSuccessAction | GetStatusesFailAction
 | InitNewAction | InitNewSuccessAction | InitNewFailAction;

export default function reducer(state:IncidentSettingsState = initialState, action:Action) : IncidentSettingsState | loop {
  let newState:IncidentSettingsState;
  const propertyNames = new IncidentStatusPropertyNames();

  switch (action.type) {
    case INIT:

    return loop(
      state,
      Cmd.action(getStatuses(action.access_token)),
    );

    case GET_STATUSES:
      let statusQuery = new EntityQuery();
      statusQuery.searchFilters.push(new SearchFilter(false, propertyNames.type, SearchFilterCondition.Is, IncidentStatusTypes.Open.ordinal));
      statusQuery.searchFilters.push(new SearchFilter(false, propertyNames.type, SearchFilterCondition.Is, IncidentStatusTypes.Suspended.ordinal));
      statusQuery.searchFilters.push(new SearchFilter(false, propertyNames.type, SearchFilterCondition.Is, IncidentStatusTypes.Closed.ordinal));

      let statusLoadSpan = new IncidentStatusLoadSpan();
      statusLoadSpan.label = true;
      statusLoadSpan.type = true;

      return loop(
        state,
        Cmd.run(IncidentStatusService.executeGetCollection, {
          successActionCreator: getStatusesSuccess,
          failActionCreator: getStatusesFailed,
          args: [null, statusQuery, statusLoadSpan, null, action.access_token]
        })
      );

    case GET_STATUSES_SUCCESS:
      newState = Object.assign({}, state,
      {
        statusesLoaded: true,
        statuses: action.collectionResponse.collection
      });
      return newState;

    case GET_STATUSES_FAIL:

      newState = Object.assign({}, state,
      {
        statusesLoaded: false
      });
      return newState;

    case INIT_NEW:
      return loop(
        state,
        Cmd.run(IncidentService.initNew, {
          successActionCreator: initNewSuccess,
          failActionCreator: initNewFailed,
          args: [action.request.rep, action.request.access_token]
        })
      );

    case INIT_NEW_SUCCESS:
      newState = Object.assign({}, state);
      newState.newIncident = action.response;
      return newState;

    case INIT_NEW_FAIL:
      return state;
    default: return state;
  }
}