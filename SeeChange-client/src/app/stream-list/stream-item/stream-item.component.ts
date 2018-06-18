import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stream} from "../../models/stream.model";
import {Subscription} from "rxjs/index";
import {StreamService} from '../../services/stream.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-stream-item',
  templateUrl: './stream-item.component.html',
  styleUrls: ['./stream-item.component.scss']
})
export class StreamItemComponent implements OnInit {
  @Input() stream: Stream;
  @Input() index: string;
  @Output() streamSelected = new EventEmitter<void>();

  constructor(private route: ActivatedRoute,
              private streamService: StreamService,
              private router: Router) {

  }

  ngOnInit() {
    this.index = this.stream.streamName;
  }

  onSelected() {
    // this.streamSelected.emit();
    this.router.navigate(['stream/' + this.stream.streamName]);
  }

}
