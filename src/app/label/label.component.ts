import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  // templateUrl: './label.component.html',
  template: `
    <div class="{{label}}" style="color: {{color}}">Hello World</div>
  `,
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  label: string;

  constructor() { }

  ngOnInit(): void {

  }

}
