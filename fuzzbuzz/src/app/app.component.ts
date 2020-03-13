import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  arrValues = [];
  value: any;

  constructor() {
  }
  ngOnInit() {
    this.getListValues();
  }
  getListValues(): any {
    // const num: number;
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.value = 'FizzBuzz';
      } else if (i % 3 === 0) {
        this.value = 'Fizz';
      } else if (i % 5 === 0) {
        this.value = 'Buzz';
      } else {
        this.value = i;
      }
      this.arrValues.push(this.value);
    }
    return this.arrValues;
  }

}
