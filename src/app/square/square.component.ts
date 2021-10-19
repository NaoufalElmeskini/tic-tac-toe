import {Component, Input, OnInit} from '@angular/core';
import {SquareValue} from '../square-value.enum';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input()
  value!: SquareValue;

  constructor() {
  }


}
