// model
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
})
export class C1Component implements OnInit {
  count: any = 15;

  isDisabled: boolean = false;

  inputValue: string;

  increaseCount() {
    this.count++;
  }

  onType(event: any) {
    this.inputValue = event.target.value;
  }

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.isDisabled = true), 2000);
  }
}
