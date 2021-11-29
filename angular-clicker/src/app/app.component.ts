import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GameInstance } from './_models/gameInstance';
import { GameService } from './_services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-clicker';
  gameInstance: GameInstance;
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameInstance = this.gameService.initGameInstance();
    this.gameService.subscribeToGame();
  }
}
