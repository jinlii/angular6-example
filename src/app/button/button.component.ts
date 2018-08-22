import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
/*
This is the vital part: we use the Angular’s createCustomElement function to create a class that can be used with
browsers’ native customElements.define functionality.
*/
@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick()">{{label}}</button>
  `,
  styles: [
`
    button {
         border: solid 3px;
         padding: 8px 10px;
         background: #bada55;
         font-size: 20px;
       }
`
  ],
  // so that the styles are bundled with the template and the component’s class into one file.
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();

  private clicksCt = 0;
  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }

}
