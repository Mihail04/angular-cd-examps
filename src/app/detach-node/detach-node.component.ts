import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'detach-node',
  templateUrl: './detach-node.component.html',
  styleUrls: ['./detach-node.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetachNodeComponent implements OnInit {

  @ViewChild('detectChangesOutsideZone') detectChangesOutsideZoneBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('markForCheck') markForCheckBtn: ElementRef<HTMLButtonElement>;

  constructor(
    public cdr: ChangeDetectorRef,
    private zone: NgZone){
  }

  ngOnInit(): void {
    this.cdr.detach();
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
