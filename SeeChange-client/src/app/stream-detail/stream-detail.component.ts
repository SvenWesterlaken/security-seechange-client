import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs/Rx";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StreamService} from "../services/stream.service";
import {Stream} from "../models/stream.model";

@Component({
  selector: 'app-stream-detail',
  templateUrl: './stream-detail.component.html',
  styleUrls: ['./stream-detail.component.scss']
})
export class StreamDetailComponent implements OnInit {

  private id: number;
  @Output() private commentSelected = new EventEmitter<void>();
  private subscription: Subscription;

  private stream: Stream;

  constructor(private streamService: StreamService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = params['id'];
    //       this.streamService.getStream(this.id).then(res => {
    //         console.log('log de user' + res.user);
    //         this.stream = res;
    //       })
    //     }


    // this.subscription = this.streamService.streamChanged
    //   .subscribe(
    //     (stream: Stream) => {
    //       this.streamService.getStream(this.id).then(res => {
    //         console.log('log de user' + res.user);
    //         this.stream = res;
    //       })
    //     }
    //   );

    this.stream = this.streamService.getStream(1);
  }
}
