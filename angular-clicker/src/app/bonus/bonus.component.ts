import { Component, Input, OnInit } from '@angular/core';
import { Bonus } from '../_models/bonus';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {
  @Input() bonus: Bonus;
  @Input() elementsCount: number;
  isInfoDisplayed: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isInfoDisplayed = false;
  }

  displayInfo() {
    this.isInfoDisplayed = !this.isInfoDisplayed;
  }
  hideInfo(){
    this.isInfoDisplayed = false;
  }
}
