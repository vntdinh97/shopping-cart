import { Injectable } from '@angular/core';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  item1: Item = {
    id: 1,
    name: "Laptop",
    description: "Macbook",
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-silver-select-201807_GEO_SG?wid=892&hei=820&&qlt=80&.v=1531167623157",
    price: 573,
    quantity: 1
  };

  item2: Item = {
    id: 2,
    name: "Phone",
    description: "iPhone",
    image:
      "https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg",
    price: 599,
    quantity: 1
  };

  item3: Item = {
    id: 3,
    name: "Phone",
    description: "iPhone",
    image:
      "https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg",
    price: 599,
    quantity: 1
  };

  items: Item[] = [
    this.item1,this.item2,this.item3
  ];

  constructor() { }

  removeItem(itemId:number){
    const index = this.items.findIndex(item => {
      item.id === itemId
    });
    this.items.splice(index,1);
  }

  changeQuantity(itemId:number, quantity:number){
    const index = this.items.findIndex(item => item.id === itemId);
    this.items[index].quantity = quantity;
  }

  totalQuantity() : number{
    var total = 0;
    this.items.forEach(item => {
      total += item.quantity;
    });
    return total;
  }

  totalPrice() :number {
    var total = 0;
    this.items.forEach(item => {
      total += item.quantity * item.price;
    });
    return total;
  }
}
