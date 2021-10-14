import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GameInstance } from './_models/gameInstance';
import { v4 as uuidv4 } from 'uuid';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-clicker';
  gameInstance: GameInstance;
  subscription: Subscription;

  ngOnInit(): void {
    this.gameInstance = {
      id: uuidv4(),
      elementsCount: 0,
      perSecond: 0,
      buildings: [
        {name: "Rateau", imagePath:"../../assets/images/rake.png", quantity:0, perSecond:1, price: 20},
        {name: "Poulailler", imagePath:"../../assets/images/chicken-coop.png", quantity:0, perSecond:4, price: 100},
        {name: "Tracteur", imagePath:"../../assets/images/tracteur.png", quantity:0, perSecond:20, price: 1000},
      ]
    }
    let source = interval(1000);
    this.subscription = source.subscribe(val => this.gameInstance.elementsCount += this.gameInstance.perSecond);
  }
}
