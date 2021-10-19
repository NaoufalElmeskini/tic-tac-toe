import {Component, OnInit} from '@angular/core';
import {SquareValue} from '../square-value.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  SquareValue = SquareValue;
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
  }

  get player(): SquareValue {
    return this.xIsNext ? SquareValue.X : SquareValue.O;
  }

  makeMove(index: number) {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): any {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const line of lines) {
      var i = line[0];
      var j = line[1];
      var k = line[2];

      console.log({i, j, k});

      if (this.squares[i] === this.squares[j]
        && this.squares[i] === this.squares[k]) {
        return this.squares[i];
      }
    }
    return null;
  }
}
