import {ApplicationRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cd-examp';

  a = 0;
  b = 0;

  constructor(private app: ApplicationRef){
  }

  runAppTick(): void {
    this.app.tick();
  }

  sendPropsToPush(): void {
   this.a = +Math.random().toFixed(1);
  }

  sendProps(): void {
    this.b = +Math.random().toFixed(1);
   }

   click(): void {
     
   }
}
