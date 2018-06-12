import { Component, OnInit, OnChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
    //   if ($(document.body).height() < $(window).height()) {
    //   $('.footer').attr('style', 'position: fixed!important; bottom: 0px;');
    // }

    // $(window).on('load resize scroll', function() {
    //   var f = $('#footer');
    //   f.css({position:'static'});
    //   if (f.offset().top + f.height() < $(window).height()) {
    //     f.css({position:'fixed', bottom:'0', width:'100%'});
    //   }
    //   else if (f.offset().top + f.height() > $(window).height()) {
    //     f.css({position:'static', bottom:'', width:'100%'});
    //   }
    // });


  }

  ngOnInit(): void {
  }
}






