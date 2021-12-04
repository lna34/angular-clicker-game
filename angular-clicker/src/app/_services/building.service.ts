import { Injectable } from '@angular/core';
import { Building } from '../_models/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor() { }

  getBuildings(): Building[] {
    var buildings = [
      new Building({ name: "Component A", imagePath: "../assets/images/cube.png", quantity: 0, perSecond: .2, price: 20 }),
      new Building({ name: "Component B", imagePath: "../assets/images/cube.png", quantity: 0, perSecond: 1.5, price: 100 }),
      new Building({ name: "Component C", imagePath: "../assets/images/cube.png", quantity: 0, perSecond: 8, price: 1000 }),
      new Building({ name: "Component D", imagePath: "../assets/images/cube.png", quantity: 0, perSecond: 25, price: 5000 }),
      new Building({ name: "Component E", imagePath: "../assets/images/cube.png", quantity: 0, perSecond: 35, price: 10000 }),
      new Building({ name: "Component F", imagePath: "../assets/images/cube.png", quantity: 0, perSecond: 65, price: 100000 }),
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
