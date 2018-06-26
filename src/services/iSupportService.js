//@flow
import qs from 'qs';
import ServiceBase from './serviceBase';
import { LoginInfo,
  AuthInfo,
  ServiceError,
  GetResponse,
  CollectionResponse,
  CountResponse,
  WorkItemTypes,
  LoadSpanType,
  EntityQuery,
  TokenRequest,
  TokenResponse
} from '../models';
import {authHeadersSelector, authInfoSelector} from '../models/selectors';

class iSupportService extends ServiceBase {
  static encrypt(text: string) : string {
    return super.encrypt(text);
  }

  static getAccessToken(tokenRequest: TokenRequest) : Promise<TokenResponse | ServiceError>{
    return super.auth().post('/token', qs.stringify(tokenRequest))
    .then(response => {
      const tokenResponse:TokenResponse = response.data;
      tokenResponse.repId = parseInt(tokenResponse.repId, 10);
      return tokenResponse;
    })
    .catch(error => {
      return {
        message: error.response.data.error
      };
    });
  }

  static authenticate(loginInfo: LoginInfo): Promise<AuthInfo | ServiceError> {
    return super.api().get('/authentication', {headers: authHeadersSelector(loginInfo)})
    .then(response => {
      const authInfo:AuthInfo = authInfoSelector(loginInfo, {
        repId: parseInt(response.headers["x-isupport-rep-id"], 10),
        authId: response.headers["x-isupport-auth-id"],
        authToken: response.headers["x-isupport-auth-token"]
      });

      return authInfo;
    })
    .catch(error => {
      return {
        message: error.message
      };
    });
  }

  // static executeGet(controller: string, data: ?any, query: ?any, loadSpan: ?any, rep: ?any): Promise<Any>{
  //   if (!data) data = {};
  //   if (query) data.query = query;
  //   if (loadSpan) data.loadSpan = loadSpan;
  //   if (rep) data.rep = rep;
  // }

  static executeGet(controller: WorkItemTypes, id: number, loadSpan: ?LoadSpanType, mapFunc: ?(item: any) => mixed, access_token: string): Promise<GetResponse | ServiceError>{
    let data = {};
    
    if (loadSpan) {
      data.loadSpan = loadSpan;
    }

    return super.api().get(`/${controller}/${id}?${qs.stringify(data)}`, { headers: { Authorization: `Bearer ${access_token}` } })
    .then(response => {
      let result = {
        item: response.data,
        controller: controller
      };

      if (mapFunc){
        result.item = mapFunc(result.item);
      }

      return result;
    })
    .catch(error => {
      return {
        message: error.message
      };
    });
  }

  static executeGetCollection(controller: WorkItemTypes, data: ?any, query: ?EntityQuery, loadSpan: ?LoadSpanType, rep: ?any, mapFunc: ?() => mixed, access_token: string): Promise<CollectionResponse | ServiceError>{
    if (!data) {
      data = {};
    }
    if (query) {
      data.query = query;
    }
    if (loadSpan) {
      data.loadSpan = loadSpan;
    }
    if (rep) {
      data.rep = rep;
    }

    return super.api().get(`/${controller}?${qs.stringify(data)}`, { headers: { Authorization: `Bearer ${access_token}` } })
    .then(response => {
      let result = {
        collection: response.data,
        controller: controller
      };

      if (mapFunc){
        result.collection = result.collection.map(mapFunc);
      }

      return result;
    })
    .catch(error => {
      return {
        message: error.message
      };
    });
  }

  static executeGetCount(controller: WorkItemTypes, data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    if (!data) {
      data = {};
    }
    if (query) {
      data.query = query;
    }
    if (rep) {
      data.rep = rep;
    }

    return super.api().get(`/${controller}/Count?${qs.stringify(data)}`, { headers: { Authorization: `Bearer ${access_token}` } } )
    .then(response => {
      // debugger;
      return {
        count: parseInt(response.data, 10),
        controller: controller
      };
    })
    .catch(error => {
      // debugger;
      return {
        message: error.message
      };
    });
  }
}

export default iSupportService;
