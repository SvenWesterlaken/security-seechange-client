import {Injectable} from '@angular/core';
// import {Subject} from "rxjs/Subject";
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import {User} from "../models/user.model";
import {Userlogin} from "../models/userlogin.model";

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
