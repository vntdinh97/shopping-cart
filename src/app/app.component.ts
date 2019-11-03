import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';

  totalPrice:number;
  totalQuantity:number;

  getChanges(changesObject:any) {
    this.totalPrice = changesObject.totalPrice;
    this.totalQuantity = changesObject.totalQuantity;
  }

  ngDoCheck() {
  }
}
