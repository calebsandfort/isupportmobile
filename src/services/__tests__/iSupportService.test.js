//@flow
/* eslint-disable */
import iSupportService from '../iSupportService';
import IncidentService from '../IncidentService';
import {
  LoginInfo,
  CountResponse,
  CollectionResponse,
  EntityQuery,
  SearchFilter,
  SearchFilterCondition,
  TokenRequest,
  TokenResponse
} from '../../models';
import {Incident} from '../../models/Entities';
import {Headline} from '../../models/Entities';
import {HeadlinePropertyNames} from '../../models/Entities/PropertyNames';
import {HeadlineLoadSpan} from '../../models/Entities/LoadSpans';
import {IncidentStatusTypes} from '../../models/Entities/Enums';
import moment from 'moment';

describe('iSupport Service', () => {
  let access_token = 'k1_l5WzYh7P77DZywmjutvsSoqXYB2JPfAkZwiYAMnGqG_FFtv4nZmyJMsrNb_pioAwBjtleTT0uz4M_E2xxDi81e8w5S8FBFjII5QER0iC9kGulBUV3HCglrECQiyRCPJecc_qtdHa8IGs0oprdN1wgyCmAKNX2bY-RdUx8HY7J_0FNDpUarCRKBbRCqr5U2gEzn2-kXLr7EOGGtZbXGIh427VMJ50KoETNkSIrAD2dvlnXGTNilQO8XECnECO_R0t-DZ7cNnwjMezQy1P2uPIpVmzSoMndwQYSW4PWCsYftfaUZ5k59hfUzc9CWnJpjNHQ8gBbOdibszF97JmN2QaKX2k9KQki12evcQu_9pc';
  const rep = {Identifier: 12};

  // describe('tokenFlow', () => {
  //   it('it should properly get an access token and refresh token', async () => {
  //     const firstRequest:TokenRequest = {
  //       username: "test",
  //       password: iSupportService.encrypt("password"),
  //       grant_type: "password"
  //     }
  //
  //     const firstResponse:TokenResponse = await iSupportService.getAccessToken(firstRequest);
  //     firstResponse.should.not.have.property('message');
  //     firstResponse.should.have.property('access_token');
  //     firstResponse.should.have.property('token_type');
  //     firstResponse.should.have.property('expires_in');
  //     firstResponse.should.have.property('refresh_token');
  //     firstResponse.should.have.property('userName');
  //     firstResponse.should.have.property('repId');
  //     firstResponse.repId.should.be.above(0);
  //     const secondRequest:TokenRequest = {
  //       refresh_token: firstResponse.refresh_token,
  //       grant_type: "refresh_token"
  //     }
  //
  //     const secondResponse:TokenResponse = await iSupportService.getAccessToken(secondRequest);
  //
  //     secondResponse.should.not.have.property('message');
  //     secondResponse.should.have.property('access_token');
  //     secondResponse.should.have.property('token_type');
  //     secondResponse.should.have.property('expires_in');
  //     secondResponse.should.have.property('refresh_token');
  //     secondResponse.should.have.property('userName');
  //     secondResponse.should.have.property('repId');
  //     secondResponse.repId.should.be.above(0);
  //     access_token = secondResponse.access_token;
  //     console.log("access_token: " + access_token);
  //   });
  // });

  describe('IncidentInitNew', () => {
    it('it should properly init a new incident for the specified rep', async () => {
      const result:Incident = await IncidentService.initNew(rep, access_token)
      result.number.length.should.be.eql(10);
    });
  });

  describe('IncidentCountForRep', () => {
    it('it should properly get an incident count for the specified rep', async () => {
      const result:CountResponse = await iSupportService.executeGetCount("Incident", null, null, rep, access_token);
      result.count.should.be.above(0);
    });
  });

  describe('ChangeCountForRep', () => {
    it('it should properly get a change count for the specified rep', async () => {
      const result:CountResponse = await iSupportService.executeGetCount("Change", null, null, rep, access_token);
      result.count.should.be.above(0);
    });
  });

  describe('IncidentStatusTypes', () => {
    it('it should enum properly', () => {
      //console.log(IncidentStatusTypes);
      const ist = IncidentStatusTypes.enumOrdinalOf(1);
      ist.ordinal.should.be.eql(1);
      ist.name.should.be.eql("Open");
      ist.display.should.be.eql("Open");
    });
  });

  // describe('Encrypt/Decrypt', () => {
  //   it('it should properly encrypt and decrypt a string', () => {
  //     const text = "encrypt me";
  //     const enc = { enc: iSupportService.encrypt(text) };
  //     const dec = { dec: "encrypt me" };
  //
  //     //$FlowFixMe
  //     dec.dec.should.be.eql(text);
  //   });
  // });

  // describe('GetHeadlines', () => {
  //   it('it should properly get a collection of active headlines', async () => {
  //     let query = new EntityQuery();
  //     query.searchFilters.push(new SearchFilter(true, HeadlinePropertyNames.expirationDate, SearchFilterCondition.After, moment().format('YYYY-MM-DDTHH:mm:ss')));
  //
  //     let loadSpan = new HeadlineLoadSpan();
  //     loadSpan.message = true;
  //
  //     const result:CollectionResponse = await iSupportService.executeGetCollection("headline", null, query, loadSpan, null, Headline.fromApiEntity);
  //     debugger
  //     result.should.not.have.property('message');
  //     result.collection.length.should.be.above(0);
  //   });
  // });
});
