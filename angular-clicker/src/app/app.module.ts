import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickerAreaComponent } from './clicker-area/clicker-area.component';
import { BuildingsAreaComponent } from './buildings-area/buildings-area.component';
import { BuildingComponent } from './building/building.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerAreaComponent,
    BuildingsAreaComponent,
    BuildingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }