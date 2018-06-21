//@flow
import { loop, Cmd } from 'redux-loop';
import { iSupportService } from '../../services';
import { TokenRequest, TokenResponse, UserManagementState, ServiceError, CountResponse } from '../../models';
import {init as incidentSettingsInit} from './incidentSettings';

// <editor-fold initialState>
const initialState: UserManagementState = {
  authenticated: true,
  authenicationError: "",
  authInfo: {
    repId: 12,
    userName: "test",
    access_token: "k1_l5WzYh7P77DZywmjutvsSoqXYB2JPfAkZwiYAMnGqG_FFtv4nZmyJMsrNb_pioAwBjtleTT0uz4M_E2xxDi81e8w5S8FBFjII5QER0iC9kGulBUV3HCglrECQiyRCPJecc_qtdHa8IGs0oprdN1wgyCmAKNX2bY-RdUx8HY7J_0FNDpUarCRKBbRCqr5U2gEzn2-kXLr7EOGGtZbXGIh427VMJ50KoETNkSIrAD2dvlnXGTNilQO8XECnECO_R0t-DZ7cNnwjMezQy1P2uPIpVmzSoMndwQYSW4PWCsYftfaUZ5k59hfUzc9CWnJpjNHQ8gBbOdibszF97JmN2QaKX2k9KQki12evcQu_9pc",
    refresh_token: "1d7095e01c4c479686e81043f70af6c1"
  },
  incidentCount: 0,
  changeCount: 0,
  problemCount: 0,
  initial: true
};
// </editor-fold>

// <editor-fold Actions>
const AUTHENTICATE = 'iSupport/userManagement/AUTHENTICATE';
const AUTHENTICATE_SUCCESS = 'iSupport/userManagement/AUTHENTICATE_SUCCESS';
const AUTHENTICATE_FAIL = 'iSupport/userManagement/AUTHENTICATE_FAIL';
const SET_INITIAL_FALSE = 'iSupport/userManagement/SET_INITIAL_FALSE';

const WORK_ITEM_COUNT = 'iSupport/userManagement/WORK_ITEM_COUNT';
const WORK_ITEM_COUNT_SUCCESS = 'iSupport/userManagement/WORK_ITEM_COUNT_SUCCESS';
const WORK_ITEM_COUNT_FAIL = 'iSupport/userManagement/WORK_ITEM_COUNT_FAIL';

type AuthenticateAction = { type: "iSupport/userManagement/AUTHENTICATE", tokenRequest: TokenRequest }
type AuthenticateSuccessAction = { type: "iSupport/userManagement/AUTHENTICATE_SUCCESS", tokenResponse: TokenResponse }
type AuthenticateFailAction = { type: "iSupport/userManagement/AUTHENTICATE_FAIL", error: ServiceError };
type SetInitialFalseAction = { type: "iSupport/userManagement/SET_INITIAL_FALSE" };

type WorkItemCountAction = { type: "iSupport/userManagement/WORK_ITEM_COUNT", workItemType: string }
type WorkItemCountSuccessAction = { type: "iSupport/userManagement/WORK_ITEM_COUNT_SUCCESS", countResponse: CountResponse }
type WorkItemCountFailAction = { type: "iSupport/userManagement/WORK_ITEM_COUNT_FAIL", error: ServiceError };

type Action = AuthenticateAction | AuthenticateSuccessAction | AuthenticateFailAction | SetInitialFalseAction
| WorkItemCountAction | WorkItemCountSuccessAction | WorkItemCountFailAction;

export function authenticate(tokenRequest: TokenRequest): AuthenticateAction {
  tokenRequest.password = iSupportService.encrypt(tokenRequest.password);
  return { type: AUTHENTICATE, tokenRequest: tokenRequest };
}

export function authenticateSuccess(tokenResponse: TokenResponse): AuthenticateSuccessAction {
  return { type: AUTHENTICATE_SUCCESS, tokenResponse: tokenResponse };
}

export function authenticateFailed(error: ServiceError): AuthenticateFailAction {
  return { type: AUTHENTICATE_FAIL, error: error.message };
}

export function setInitialFalse() {
  return { type: SET_INITIAL_FALSE };
}

export function workItemCount(workItemType: string): WorkItemCountAction {
  return { type: WORK_ITEM_COUNT, workItemType: workItemType };
}

export function workItemCountSuccess(countResponse: CountResponse): WorkItemCountSuccessAction {
  return { type: WORK_ITEM_COUNT_SUCCESS, countResponse: countResponse };
}

export function workItemCountFailed(error: ServiceError): WorkItemCountFailAction {
  return { type: WORK_ITEM_COUNT_FAIL, error: error.message };
}
// </editor-fold>

// <editor-fold reducer>
export default function reducer(state:UserManagementState = initialState, action:Action) : UserManagementState | loop {
  let newState:UserManagementState;

  switch (action.type) {
    // <editor-fold Authenticate>
    case AUTHENTICATE:
      return loop(
        state,
        Cmd.run(iSupportService.getAccessToken, {
          successActionCreator: authenticateSuccess,
          failActionCreator: authenticateFailed,
          args: [action.tokenRequest]
        })
      );

    case AUTHENTICATE_SUCCESS:
      const badLogin = typeof (action.tokenResponse.message) !== "undefined" && action.tokenResponse.message === 'invalid_grant';
      newState = Object.assign({}, state,
      {
        authenticated: !badLogin,
        authenicationError: badLogin ? "badLogin" : "",
        authInfo: {
          repId: action.tokenResponse.repId,
          userName: action.tokenResponse.userName,
          access_token: action.tokenResponse.access_token,
          refresh_token: action.tokenResponse.refresh_token
        }
      });

      return loop(
        newState,
        Cmd.list([
          Cmd.action(incidentSettingsInit(action.tokenResponse.access_token)),
          Cmd.run(iSupportService.executeGetCount, {
            successActionCreator: workItemCountSuccess,
            failActionCreator: workItemCountFailed,
            args: ["incident", null, null, {Identifier: newState.authInfo.repId}, newState.authInfo.access_token]
          }),
          Cmd.run(iSupportService.executeGetCount, {
            successActionCreator: workItemCountSuccess,
            failActionCreator: workItemCountFailed,
            args: ["change", null, null, {Identifier: state.authInfo.repId}, newState.authInfo.access_token]
          }),
          Cmd.run(iSupportService.executeGetCount, {
            successActionCreator: workItemCountSuccess,
            failActionCreator: workItemCountFailed,
            args: ["problem", null, null, {Identifier: state.authInfo.repId}, newState.authInfo.access_token]
          })
        ])
      );

    case AUTHENTICATE_FAIL:

      newState = Object.assign({}, state,
      {
        authenticated: false,
        authenicationError: action.error.message,
        authInfo: {
          repId: 0,
          authId: "",
          authToken: ""
        }
      });
      return newState;

    case SET_INITIAL_FALSE:

      newState = Object.assign({}, state,
      {
        initial: false
      });

      const firstRequest:TokenRequest = {
            username: "test",
            password: iSupportService.encrypt("password"),
            grant_type: "password"
          }

      return loop(
        newState,
        Cmd.run(iSupportService.getAccessToken, {
          successActionCreator: authenticateSuccess,
          failActionCreator: authenticateFailed,
          args: [firstRequest]
        })
      )
    // </editor-fold>

    // <editor-fold desc='Work Item Count'>
    case WORK_ITEM_COUNT:
      return loop(
        state,
        Cmd.list([
          Cmd.run(iSupportService.executeGetCount, {
            successActionCreator: workItemCountSuccess,
            failActionCreator: workItemCountFailed,
            args: ["incident", null, null, {Identifier: state.authInfo.repId}]
          }),
          Cmd.run(iSupportService.executeGetCount, {
            successActionCreator: workItemCountSuccess,
            failActionCreator: workItemCountFailed,
            args: ["change", null, null, {Identifier: state.authInfo.repId}]
          }),
          Cmd.run(iSupportService.executeGetCount, {
            successActionCreator: workItemCountSuccess,
            failActionCreator: workItemCountFailed,
            args: ["problem", null, null, {Identifier: state.authInfo.repId}]
          })
        ])
      );

    case WORK_ITEM_COUNT_SUCCESS:
      newState = Object.assign({}, state);
      newState[`${action.countResponse.controller}Count`] = action.countResponse.count;
      return newState;

    case WORK_ITEM_COUNT_FAIL:
      newState = Object.assign({}, state);
      return newState;
    // </editor-fold>

    default: return state;
  }
}
// </editor-fold>
