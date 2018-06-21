// getStreams
// return as Stream[]
import {Subject} from "rxjs/index";
import {Stream} from "../models/stream.model";
import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class StreamService {
  streamChanged = new Subject<Stream[]>();
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.streamServerUrl;
  private apiUrl = environment.nodeServerUrl;
  private serverApiUrl = environment.seechangeApiUrl;
  private streams: Stream[];

  constructor(private http: Http) {

  }

  getStreams() {
    console.log('Fetching streams from database.')
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.streams = response.json() as Stream[];
        return response.json().data.live as Stream[];
      })
      .catch(error => {
        return error;
      });

  }

  getStream(index: string) {
    if (index == null) {
      console.log('index is null');
      return null;
    }
    return this.http.get(this.serverUrl + "live/" + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json().data as Stream;
      })
      .catch(error => {
        return error;
      });
  }
  getNickname(username: string) {
    if (username == null) {
      console.log('null');
      return null;
    }
    return this.http.get(this.serverApiUrl + "user/info/?username=" + username, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response);
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}
