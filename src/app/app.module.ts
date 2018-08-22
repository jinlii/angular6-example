import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent, HeroesComponent, AlertComponent, ButtonComponent
  ],
  entryComponents: [
    AlertComponent, ButtonComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
    // custom-button can then be used in index.html as a native element
    // <custom-button label="First Value"></custom-button>

  }

  ngDoBootstrap() {}
}
