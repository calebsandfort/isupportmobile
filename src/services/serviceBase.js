import axios from 'axios';
import JSEncrypt from 'jsencrypt';
import CryptoJS from 'crypto-js';

const API_BASE_URL = "http://dev-csandfort.gwi.com/Mobile/api/";
const AUTH_URL = "http://dev-csandfort.gwi.com/Mobile/";
const PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----" +
"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCiPI4oqhlv2y+ylrI9ylXfECJv" +
"P5/ragkPSiWRmgoArAXzK1cq2jHTuOvwHBJdrGMC3lMXJACc068jBBsxNbuKiOJr" +
"jZ3mbxgrq3ufcLsEoRIDssPsq3Km2JkhehBCZntbqEiPm6WPar97L9nCaQeUf/Xb" +
"X5NscMd+W7YKnFm+uQIDAQAB" +
"-----END PUBLIC KEY-----";

const PRIVATE_KEY = "-----BEGIN RSA PRIVATE KEY-----" +
"MIICXAIBAAKBgQCiPI4oqhlv2y+ylrI9ylXfECJvP5/ragkPSiWRmgoArAXzK1cq" +
"2jHTuOvwHBJdrGMC3lMXJACc068jBBsxNbuKiOJrjZ3mbxgrq3ufcLsEoRIDssPs" +
"q3Km2JkhehBCZntbqEiPm6WPar97L9nCaQeUf/XbX5NscMd+W7YKnFm+uQIDAQAB" +
"AoGAfoKcFGe4WDpism/C5F5AoiYxw/CoYuoX0H1wWF73R9jc9ueoHHlze3drPJyX" +
"UcaYmucFgjkH5UNJAhQ0pCYTbFCxeNLD0F6SeskZVBu37BzXxvs8a3r79ZQDHQ2d" +
"gMdAjFIyd8lV60PUxP81ijH40YX9DrKcQdKhzKTxrkBOHlECQQDYb/2SrAknQCeG" +
"rbXjw8NeOEU9C7SjjFoj+JhTP0pN73kNRXSQX0rFDv6dhIlwo94qzLw0evvZTTjn" +
"ygisnuoNAkEAv+RHPLf4pkUPzXERqjMulSipSl3+LS58WqgdTtFWfLxWU5XtmxAQ" +
"iCJnYeU1KmhA0MmAOuev63XYweZkI4OYXQJANQPxk9zJ/TBMvkOMmzbXgxu7cgGN" +
"BMabSdZZ0YJePArdlu+dZsPAt9Y9be4KEGpDQC6YJy68w/STbMtjJo1ifQJBAIw0" +
"8mwGC/MI8QPuArc2UGoB3LgOt2Ix3gCrZ0aopCXdwsGuAX9UHJArexhHTjJfHESx" +
"hjUEBkDnyWnbuf1M8K0CQCRF/sMQVYleLLX35VREIGAmZitQgAGIRXOJuiO6rGop" +
"ImbLkKNbbVU4k8EX90TdyIvqZ7JEusP04WAKoyjFY6g=" +
"-----END RSA PRIVATE KEY-----";

class ServiceBase {
  static api() {
    const adapter = axios.create({
      baseURL: API_BASE_URL
    });

    return adapter;
  }

  static auth() {
    const adapter = axios.create({
      baseURL: AUTH_URL
    });

    return adapter;
  }

  static encrypt(text: string) : string {
    let textMD5 = CryptoJS.MD5(text).toString();
    const crypt = new JSEncrypt();
    crypt.setPublicKey(PUBLIC_KEY);
    const enc = crypt.encrypt(textMD5);
    return enc;
  }

  static decrypt(text: string) : string {
    const crypt = new JSEncrypt();
    crypt.setPrivateKey(PRIVATE_KEY);
    const enc = crypt.decrypt(text);
    return enc;
  }
}

export default ServiceBase;
