import {createSelector} from 'reselect';
import CryptoJS from 'crypto-js';

const loginSelector = loginInfo => loginInfo.login;
const passwordSelector = loginInfo => loginInfo.password;
const timestampSelector = loginInfo => loginInfo.timestamp;

const repIdSelector = (_, authInfo) => authInfo.repId;
const authIdSelector = (_, authInfo) => authInfo.authId;
const authTokenSelector = (_, authInfo) => authInfo.authToken;

export const authHeadersSelector = createSelector(loginSelector, passwordSelector, timestampSelector, (login, password, timestamp) => ({
  "x-iSupport-Auth-Id": login,
  "x-iSupport-Auth-PW": CryptoJS.MD5(password).toString(),
  "x-iSupport-Auth-Timestamp": timestamp,
  "x-iSupport-Auth-Token": CryptoJS.enc.Hex.stringify(CryptoJS.SHA256(password + "," + login + "," + timestamp))
}));

export const authInfoSelector = createSelector(loginSelector, passwordSelector, timestampSelector, repIdSelector, authIdSelector, authTokenSelector, (login, password, timestamp, repId, authId, authToken) => {

  let publicKey = authId;
  let privateKey = "";

  // let passwordMD5 = CryptoJS.MD5(password);
  // let passwordHexEncoded = CryptoJS.enc.Hex.stringify(passwordMD5).toUpperCase();
  // let passwordBytes = CryptoJS.enc.Utf8.parse(passwordHexEncoded);
  // let keySalt = CryptoJS.enc.Utf8.parse(timestamp + login);
  // let key = CryptoJS.PBKDF2(passwordBytes, keySalt, {
  //   keySize: 256 / 32,
  //   iterations: 1000
  // });
  // let ivSalt = CryptoJS.enc.Utf8.parse(timestamp + publicKey);
  // let iv = CryptoJS.PBKDF2(passwordBytes, ivSalt, {
  //   keySize: 128 / 32,
  //   iterations: 1000
  // });
  //
  // // let privateKeyWords = CryptoJS.AES.decrypt(CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(authToken)}), key, {
  // //   iv: iv,
  // //   mode: CryptoJS.mode.CTR,
  // //   padding: CryptoJS.pad.ZeroPadding
  // // });
  //
  // let privateKeyWords = CryptoJS.AES.decrypt(CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(authToken)}), key, {
  //   iv: iv
  // });
  //
  // privateKey = CryptoJS.enc.Utf8.stringify(privateKeyWords);

  return {repId: repId, authToken: authToken, publicKey: publicKey, privateKey: privateKey};
});
