import { Component, Input, OnInit } from '@angular/core';
import { Building } from '../_models/building';
import { GameInstance } from '../_models/gameInstance';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-buildings-area',
  templateUrl: './buildings-area.component.html',
  styleUrls: ['./buildings-area.component.css']
})
export class BuildingsAreaComponent implements OnInit {
  gameInstance: GameInstance;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameInstance = this.gameService.getInstance();
  }

}
