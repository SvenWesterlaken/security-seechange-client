import {Injectable} from '@angular/core';
// import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Http, Headers, RequestOptions} from '@angular/http';
import {User} from "../models/user.model";


@Injectable()
export class SessionStorageService {

  private serverUrl = environment.nodeServerUrl; // URL to web api
  constructor(private http: Http) {
    console.log("user service aangeroepen")
  }

  clearLocalStorage(){
    localStorage.clear();
  }

  setToken(id: string) {
    console.log('setToken()');
    localStorage.setItem('token', id);
  }

  getToken() {
    return localStorage.token;
  }

  getUserId() {
    return localStorage.userid;
  }

  getheaders() {
    var headers;
    return headers = new Headers({'token': this.getToken()});
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }
}
