import { Injectable } from '@angular/core';
import { BonusService } from './bonus.service';
import { BuildingService } from './building.service';
import { v4 as uuidv4 } from 'uuid';
import { GameInstance } from '../_models/gameInstance';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameInstance: GameInstance;
  private baseGameMoney: number = 100000000;
  private basePerSecond: number = 0;

  constructor(private bonusService: BonusService, private buildingService: BuildingService) { }

  initGameInstance(): GameInstance {
    this.gameInstance = new GameInstance({
      id: uuidv4(),
      gameMoney: this.baseGameMoney,
      perSecond: this.basePerSecond,
      buildings: this.buildingService.getBuildings(),
      bonuses: this.bonusService.getBonuses()
    });

    return this.gameInstance;
  }

  subscribeToGame() {
    let source = interval(10);

    source.subscribe(() => {
      this.gameInstance.gameMoney += this.gameInstance.perSecond / 100
    });
  }

  getInstance(){
    return this.gameInstance;
  }

  incrementElementsCount() {
    this.gameInstance.gameMoney++;
  }

}
