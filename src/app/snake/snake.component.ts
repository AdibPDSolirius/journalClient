import { Component, OnInit } from '@angular/core';
import { Game } from '../SnakeGame/game.js';
import { MEDIUM } from '../SnakeGame/gameSpeed.js'

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.start();
  }

  start() {
    let game = new Game();
    game.runAtSpeed(MEDIUM);
  }

}
