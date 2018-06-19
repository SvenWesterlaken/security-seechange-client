import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs/index";
import {StreamService} from "../services/stream.service";
import {Stream} from "../models/stream.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})
export class StreamListComponent implements OnInit {

  @Input() streams: Stream[] = [];
  private subscription: Subscription;

  constructor(private streamService: StreamService,
              private route: ActivatedRoute,
              private router: Router) {

  }
  ngOnInit() {
    this.subscription = this.streamService.streamChanged
      .subscribe(
        (streams: Stream[]) => {
          if (streams.length != 0){
            this.streamService.getStreams()
              .then(res => {
                this.streams = res;
              });
        }
        }
      );
    this.streamService.getStreams().then(res => {
      if (res.length != 0) {
      this.streams = Object.values(res);
      console.log("streams>");
      console.dir(this.streams);
    }
    });  }

  onSelected(id: string) {
    // this.streamSelected.emit();
    this.router.navigate(['stream/' + id]);
  }
}
