import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickerAreaComponent } from './clicker-area/clicker-area.component';
import { BuildingsAreaComponent } from './buildings-area/buildings-area.component';
import { BuildingComponent } from './building/building.component';
import { BonusComponent } from './bonus/bonus.component';
import { AppRoutingModule } from '../app-routing.module';
import { BonusAreaComponent } from './bonus-area/bonus-area.component';
import { StatAreaComponent } from './stat-area/stat-area.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ClickerAreaComponent,
    BuildingsAreaComponent,
    BuildingComponent,
    BonusComponent,
    BonusAreaComponent,
    StatAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
