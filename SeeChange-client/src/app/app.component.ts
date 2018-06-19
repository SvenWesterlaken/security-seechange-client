import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //@HostListener('window:unload')
  private onUnload(): void {
    localStorage.clear();
  }
}
