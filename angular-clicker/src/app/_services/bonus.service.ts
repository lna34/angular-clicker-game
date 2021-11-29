import { Injectable } from '@angular/core';
import { Bonus } from '../_models/bonus';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor() { }
  
  getBonuses(): Bonus[] {
    var bonuses = [
      new Bonus({ name: "Double-clic", description: "Double le nombre de poussins générés par le clic", isActive: false, price: 100, multiplier: 2 }),
      new Bonus({}),
      new Bonus({}),
      new Bonus({}),
      new Bonus({}),
      new Bonus({}),
      new Bonus({}),
      new Bonus({}),
    ]
    
    return bonuses;
  }

}
