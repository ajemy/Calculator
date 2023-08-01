import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  number: string = '';
  constructor() {}
  getValue(event: any) {
    this.number += event.target.value;
  }
  clear() {
    if (typeof this.number == 'string') {
      this.number = this.number.slice(0, -1);
    } else {
      this.number = '';
    }
    return this.number;
  }
  equal() {
    this.number = eval(this.number);
    // this.number = this.number.toString();
    // console.log(typeof this.number);
  }
}
