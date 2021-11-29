import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Building } from '../_models/building';
import { GameInstance } from '../_models/gameInstance';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  gameInstance: GameInstance;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameInstance = this.gameService.getInstance();
  }

  onBuy(building: Building) {
    this.gameInstance.gameMoney -= building.getCurrentPrice();
    this.gameInstance.perSecond += Math.round((building.perSecond + Number.EPSILON) * 100) / 100;
    building.quantity ++;
    this.playAudio();
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../assets/audio/pop.mp3";
    audio.currentTime = .1;
    audio.volume = .2;
    audio.load();
    audio.play();
  }
}
