import {ChangeDetectorRef, Component, Inject, Injector, NgZone, OnInit, Optional} from '@angular/core';
import {NodeOnPushComponent} from '../node-on-push/node-on-push.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  constructor(
      private cdr: ChangeDetectorRef,
      private zone: NgZone,
      @Optional()@Inject(NodeOnPushComponent) private NodeOnPushComponent: NodeOnPushComponent,
      private injector: Injector
    ){
  }

  ngOnInit(): void {
    console.log(NodeOnPushComponent)
    console.log(this.injector)
  }

  cd(elm: HTMLElement): void {
    elm.classList.add('hightlight');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        elm.classList.remove('hightlight');
    }, 500);
    })
  }
}

