import { Injectable } from '@angular/core';
import { Building } from '../_models/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor() { }

  getBuildings(): Building[] {
    var buildings = [
      new Building({ name: "Rateau", imagePath: "../../assets/images/rake.png", quantity: 0, perSecond: 1, price: 20 }),
      new Building({ name: "Poulailler", imagePath: "../../assets/images/chicken-coop.png", quantity: 0, perSecond: 6, price: 100 }),
      new Building({ name: "Tracteur", imagePath: "../../assets/images/tracteur.png", quantity: 0, perSecond: 30, price: 1000 }),
    ];

    return buildings;
  }

  incrementBuildingCount(building: Building){
    building.quantity++;
  }

  decrementBuildingCount(building: Building){
    building.quantity--;
  }

}
