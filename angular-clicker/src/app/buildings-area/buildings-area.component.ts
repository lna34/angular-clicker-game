import { Component, Input, OnInit } from '@angular/core';
import { Building } from '../_models/building';
import { GameInstance } from '../_models/gameInstance';

@Component({
  selector: 'app-buildings-area',
  templateUrl: './buildings-area.component.html',
  styleUrls: ['./buildings-area.component.css']
})
export class BuildingsAreaComponent implements OnInit {
  @Input() gameInstance: GameInstance;

  constructor() { }

  ngOnInit(): void {
    
  }

  onBought(building: Building){
    this.gameInstance.elementsCount -= building.currentPrice();
    this.gameInstance.perSecond += Math.round((building.perSecond + Number.EPSILON) * 100) / 100;
    building.quantity ++;
  }

}
