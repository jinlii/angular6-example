import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent, HeroesComponent, AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
