import {ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  text;

  @Input() b: number;

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
    this.text = Math.random().toFixed(1);
    this.cdr.detectChanges();
  }


}

