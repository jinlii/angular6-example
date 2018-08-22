import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-example';
  isValid = true;
  content = null;

// render your Angular elements as native web elements, and they’re interpreted as trusted HTML elements.
// for this to work: update in tsconfig.json, "target": "es6",
// ES5 modules which do not support the extend functionality required by Angular custom elements
  constructor(private injector: Injector, domSanitizer: DomSanitizer) {
    // same: const myElement = createCustomElement(AlertComponent, {injector: this.injector});
    const myElement = createCustomElement(AlertComponent, { injector });
    customElements.define('my-elem', myElement);
    this.content = domSanitizer.bypassSecurityTrustHtml("<my-elem name='Said'></my-elem>");

  }
}
