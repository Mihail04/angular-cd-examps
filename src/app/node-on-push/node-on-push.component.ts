import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-node-on-push',
  templateUrl: './node-on-push.component.html',
  styleUrls: ['./node-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeOnPushComponent implements OnInit {

  @Input() a: number;

  constructor(private cdr: ChangeDetectorRef,
    private zone: NgZone){
  }

  ngOnInit(): void {
  }

  cd(elm: HTMLElement): void {
    elm.classList.add('hightlight');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        elm.classList.remove('hightlight');
    }, 500);
    })
  }

  clickOnNode(): void {
    this.cdr.detectChanges();
  }


}
