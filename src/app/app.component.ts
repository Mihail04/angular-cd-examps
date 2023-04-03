import {ApplicationRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cd-examp';

  constructor(private app: ApplicationRef){
  }

  runAppTick(): void {
    this.app.tick();
  }

   click(): void {
     
   }
}
