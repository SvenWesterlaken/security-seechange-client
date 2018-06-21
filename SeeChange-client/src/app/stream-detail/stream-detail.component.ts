import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subscription} from "rxjs/Rx";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StreamService} from "../services/stream.service";
import {Stream} from "../models/stream.model";
import * as flvjs from "./flv.js";
// import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-stream-detail',
  templateUrl: './stream-detail.component.html',
  styleUrls: ['./stream-detail.component.scss']
})
export class StreamDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() id: string;
  @Output() private commentSelected = new EventEmitter<void>();
  private subscription: Subscription;
  private player: flvjs;
  loadedStreams: number = 0;
  private nickname: string = "";


  @Input() stream: Stream;

  constructor(private streamService: StreamService,
              private route: ActivatedRoute,
              private router: Router,) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    Observable.interval(1000 * 60).subscribe(x => {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params['id'];
            this.streamService.getStream(this.id).then(res => {
              console.log("res is binnen" + res);
              console.dir(res);
              this.stream = res;
            })
          });
    });

  }

  ngAfterViewInit() {
    if(this.loadedStreams < 4) {
      this.load_data()
      this.loadedStreams++;
      console.log("streams watching: " + this.loadedStreams);
    }else{
      alert("You can only watch 4 streams at the same time.")
    }
  }

  ngOnDestroy(): void {
    console.log("streams watching: " + this.loadedStreams);
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.streamService.getStream(this.id).then(res => {
            console.log("res is binnen" + res);
            console.dir(res);
            this.stream = res;
          })
        });
  }


  load_data() {
    console.log('Load' + ' http://localhost:8000/live/' + this.id + ".flv");

    console.log("IsSupported: " + flvjs.isSupported());
    let element = document.getElementsByName('videoElement')[0];
    this.player = flvjs.createPlayer({
      type: 'flv',
      url: 'http://145.49.18.217:8000/live/' + this.id + ".flv"
    }, {
      enableWorker: false,
      lazyLoadMaxDuration: 3 * 60,
      seekType: 'range'
    });
    this.player.attachMediaElement(element);
    this.player.load();

    this.streamService.getNickname(this.id).then(res => {
      console.log(res);
      if (res.publicName == null) {
        this.nickname = this.id;
      } else {
        this.nickname = res.publicName;
      }
      console.log("Nickname: " + this.nickname);
    });
  }
}
