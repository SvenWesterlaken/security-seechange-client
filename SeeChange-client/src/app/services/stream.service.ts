// getStreams
// return as Stream[]
import {Subject} from "rxjs/index";
import {Stream} from "../models/stream.model";
import {Http, Headers, Response} from '@angular/http';
import { Injectable } from '@angular/core';


export class StreamService{
  streamChanged = new Subject<Stream[]>();


  private stream: Stream;
  private stream1: Stream;
  private stream2: Stream;
  private stream3: Stream;
  private stream4: Stream;
  private stream5: Stream;
  private streams: Stream[];



  constructor() {
    this.streams.fill(this.stream1);
  }

  getStreams() {
    console.log('Fetching streams from database.')
    // return this.http.get(this.serverUrl, {headers: this.headers})
    //   .toPromise()
    //   .then(response => {
    //     this.streams = response.json() as Stream[];
    //     return response.json() as Stream[];
    //   })
    //   .catch(error => {
    //     return error;
    //   });

    // this.streams.fill(this.stream1);
    return this.streams;
  }

}
