import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, NgZone, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-node-on-push',
  templateUrl: './node-on-push.component.html',
  styleUrls: ['./node-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeOnPushComponent {

  @Input() template: TemplateRef<void>;
  
  constructor(
    public cdr: ChangeDetectorRef,
    private zone: NgZone,
    public injector: Injector){
  }

  cd(elm: HTMLElement): void {
    elm.classList.add('hightlight');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        elm.classList.remove('hightlight');
      }, 500);
    })
  }

  click() {
    
  }
}
