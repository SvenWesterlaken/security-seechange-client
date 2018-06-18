import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {StreamService} from "../services/stream.service";
import {Stream} from "../models/stream.model";

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})
export class StreamListComponent implements OnInit {

  streams: Stream[];
  private subscription: Subscription;

  constructor(private streamService: StreamService) {

  }
  ngOnInit() {
    this.subscription = this.streamService.streamChanged
      .subscribe(
        (streams: Stream[]) => {
          this.streamService.getStreams()
            .then(res => {
              this.streams = res;
            });
        }
      );
    this.streamService.getStreams().then(res => {
      this.streams = Object.values(res);
      console.log("streams>");
      console.dir(this.streams);
    });  }

}
