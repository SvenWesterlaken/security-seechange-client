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
  @Input() index: number;
  @Output() streamSelected = new EventEmitter<void>();

  constructor(private route: ActivatedRoute,
              private streamService: StreamService,
              private router: Router) {

  }

  ngOnInit() {
    this.index = this.stream._id;

  }

  onSelected() {
    this.streamSelected.emit();
  }

}
