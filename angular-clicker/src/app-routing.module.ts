import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsAreaComponent } from './app/buildings-area/buildings-area.component';
import { BonusAreaComponent } from './app/bonus-area/bonus-area.component';
import { StatAreaComponent } from './app/stat-area/stat-area.component';
import { BuildingComponent } from './app/building/building.component';
import { BonusComponent } from './app/bonus/bonus.component';


const routes: Routes = [
  { path: 'buildings', component: BuildingComponent },
  { path: 'bonus', component: BonusComponent },
  { path: 'stats', component: StatAreaComponent },
  { path: '', component: BuildingComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
