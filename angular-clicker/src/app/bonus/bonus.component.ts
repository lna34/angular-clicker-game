import { Component, Input, OnInit } from '@angular/core';
import { Bonus } from '../_models/bonus';
import { GameInstance } from '../_models/gameInstance';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {
  gameInstance: GameInstance;
  isInfoDisplayed: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameInstance = this.gameService.getInstance();
  }

  displayInfo() {
    this.isInfoDisplayed = !this.isInfoDisplayed;
  }

  hideInfo(){
    this.isInfoDisplayed = false;
  }
  
}
