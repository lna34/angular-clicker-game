import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GameInstance } from './_models/gameInstance';
import { v4 as uuidv4 } from 'uuid';
import { Subscription, interval } from 'rxjs';
import { Building } from './_models/building';
import { Bonus } from './_models/bonus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-clicker';
  gameInstance: GameInstance;
  subscription: Subscription;

  ngOnInit(): void {
    this.initGameInstance();
    this.subscribeToGame();
  }

  initGameInstance() {
    this.gameInstance = {
      id: uuidv4(),
      elementsCount: 0,
      perSecond: 0,
      multiplierPerCount: 1,
      buildings: [
        new Building({ name: "Rateau", imagePath: "../../assets/images/rake.png", quantity: 0, perSecond: 1, basePrice: 20 }),
        new Building({ name: "Poulailler", imagePath: "../../assets/images/chicken-coop.png", quantity: 0, perSecond: 10, basePrice: 100 }),
        new Building({ name: "Tracteur", imagePath: "../../assets/images/tracteur.png", quantity: 0, perSecond: 120, basePrice: 1000 }),
      ],
      bonuses: [
        new Bonus({ name: "Double-clic", description: "Double le nombre de poussins générés par le clic", isActive: false, price: 100, multiplier: 2 }),
        new Bonus({}),
        new Bonus({}),
        new Bonus({}),
        new Bonus({}),
        new Bonus({}),
        new Bonus({}),
        new Bonus({}),
      ]
    }
  }

  subscribeToGame() {
    let source = interval(10);

    this.subscription = source.subscribe(val => {
      this.gameInstance.elementsCount += this.gameInstance.perSecond / 100
    });
  }

}
