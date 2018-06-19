import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs/Rx";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StreamService} from "../services/stream.service";
import {Stream} from "../models/stream.model";
import * as flvjs from "./flv.js";

@Component({
  selector: 'app-stream-detail',
  templateUrl: './stream-detail.component.html',
  styleUrls: ['./stream-detail.component.scss']
})
export class StreamDetailComponent implements OnInit, AfterViewInit {
  
  @Input() id: string;
  @Output() private commentSelected = new EventEmitter<void>();
  private subscription: Subscription;
  private player: flvjs;
  private nickname: string = "";
  
  @Input() stream: Stream;
  
  constructor(private streamService: StreamService,
              private route: ActivatedRoute,
              private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
      });

  }
  
  ngAfterViewInit() {
    this.load_data()
  }
  
  ngOnInit() {
<<<<<<< HEAD
=======
    // this.streamService.getStream(this.id).then(res => {
    //     this.stream = res;
    // });

>>>>>>> 573010756dfada46071b98b31c631cd73bfa0508
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.streamService.getStream(this.id).then(res => {
            console.log("res is binnen" + res);
            console.dir(res);
            this.stream = res;
<<<<<<< HEAD
            console.log("enkele streama");
            console.dir(this.stream);
            
            this.nickname = params['id'];
=======
>>>>>>> 573010756dfada46071b98b31c631cd73bfa0508
          })
        });
    
    // this.subscription = this.streamService.streamChanged
    //   .subscribe(
    //     (stream: Stream) => {
    //       this.streamService.getStream(this.stream.streamName).then(res => {
    //         console.log('log de user' + res.user);
    //         this.stream = res;
    //       })
    //     }
    //   );
  }
  
  getNickname() {
    return this.nickname;
  }
  
  load_data() {
    console.log('Load' + ' http://localhost:8000/live/' + this.id + ".flv");
    
    console.log("IsSupported: " + flvjs.isSupported());
    let element = document.getElementsByName('videoElement')[0];
    this.player = flvjs.createPlayer({
      type: 'flv',
      url: 'http://localhost:8000/live/' + this.id + ".flv"
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
