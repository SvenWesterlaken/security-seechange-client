import { Component, OnInit } from '@angular/core';
import {state} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }

  clearStorage(){
    localStorage.clear();
    this.router.navigate(['/login']);

  }

  toStreamTest(){
    this.router.navigate(['/stream']);

  }


}
