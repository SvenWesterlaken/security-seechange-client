// getStreams
// return as Stream[]
import {Subject} from "rxjs/index";
import {Stream} from "../models/stream.model";
import {Http, Headers, Response} from '@angular/http';
import { Injectable } from '@angular/core';


export class StreamService{
  streamChanged = new Subject<Stream[]>();


  private stream: Stream;
  private stream1: Stream = new Stream();
  private stream2: Stream = new Stream();
  private stream3: Stream = new Stream();
  private stream4: Stream = new Stream();
  private stream5: Stream = new Stream();
  private streams: Stream[];



  constructor() {
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
    this.stream1._id = 1;
    this.stream2._id = 2;
    this.stream3._id = 3;
    this.stream4._id = 4;
    this.stream5._id = 5;

    this.streams = [this.stream1, this.stream2, this.stream3, this.stream4, this.stream5];
    return this.streams;
  }

}
