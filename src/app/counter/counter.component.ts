

import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
     <input id="intervalInput"/>
     <button id="intervalSetButton" >Set interval</button>
  `,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  //
  // @Input()
  // message: any;
  //
  // @Output()
  // tick: any;
  //
  // @ViewChild('intervalInput') intervalInputElem: ElementRef;
  //
  // private intervalValue: any;
  //
  // constructor() {
  //   setInterval(() => send(), this.intervalInputElem.nativeElement.value);
  // }
  //
  //
  // ngOnInit(): void {
  // }
  //
  // updateValue() {
  //   this.intervalValue = this.intervalInputElem.nativeElement.value;
  // }
}
