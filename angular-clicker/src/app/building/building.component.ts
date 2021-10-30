import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Building } from '../_models/building';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() building: Building;
  @Input() elementsCount: number;
  @Output() onBoughtElement: EventEmitter<Building> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    this.onBoughtElement.emit(this.building);
  }
}
