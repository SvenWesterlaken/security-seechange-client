import {Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedStreams: number = 0;
  @Output() myEvent = new EventEmitter();


  // @HostListener('window:unload')
  private onUnload(): void {
    localStorage.clear();
  }

  private downStreams(){
    this.loadedStreams--;
}

  private upStreams(){
    this.myEvent.emit(this.loadedStreams++);
  }
}
