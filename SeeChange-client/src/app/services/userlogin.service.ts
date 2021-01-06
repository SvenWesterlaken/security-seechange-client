import {Injectable} from '@angular/core';
// import {Subject} from "rxjs/Subject";
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import {User} from "../models/user.model";
import {Userlogin} from "../models/userlogin.model";
import * as CryptoJS from 'crypto-js';
import * as shajs from 'sha.js';
// import {crypto} from 'crypto';


@Injectable()
export class userLoginService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUserUrl = environment.nodeServerUrl;

  constructor(private http: Http) {
  }



  loginUser(userLogin: Userlogin) {
    console.log(userLogin);
    return this.http.post(environment.nodeServerUrl + 'login', userLogin, {headers: this.headers})
      .toPromise()
      .then(response => {
        // console.dir(response.json);
        // this.user = response.json() as Userloginregister;
        var message = 'testmessage';
        var text = shajs('sha256').update({message}).digest('hex');
        console.log(response.json().privateKey);
        var privKey = response.json().privateKey;
        // var key = CryptoJS.AES.decrypt(privKey, userLogin.password, {
        //   // iv: this.iv,
        //   mode: CryptoJS.mode.ECB,
        //   format: CryptoJS.format.Hex
        //   // padding: CryptoJS.pad.NoPadding
        // }).toString();
        // var encodedKey = key.toString(CryptoJS.enc.Utf8);
        var bytes  = CryptoJS.AES.decrypt(response.json().privateKey.toString(), userLogin.password, {
          mode: CryptoJS.mode.ECB,
          format: CryptoJS.format.Hex
        });
        console.log(bytes)
        var plaintext = CryptoJS.enc.Utf8.parse(bytes);
        console.log(userLogin.password);
        console.log(plaintext);
        // const encrypted = key.encrypt(text, 'base64');
        // console.log(encrypted);
        return response.json() as Userlogin;
      })
      .catch(error => {
        return error;
      });

  }

  getUserName(user: User) {
    return this.http.get(this.serverUserUrl + user.name, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }



}
