import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Item } from "../models/item.model";
import {ItemService} from '../service/item.service';

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html"
})
export class BodyComponent implements OnInit {

  constructor(public itemService:ItemService){}

  items:Item[];

  @Output() sendBack: EventEmitter<any> = new EventEmitter();

  getQuantity(changes: any) {
    this.itemService.changeQuantity (changes.id, changes.quantity);
    this.calculate();
  }

  removeItem(id:number){
    this.itemService.removeItem(id);
    this.calculate();
  }

  calculate() {
    var changesObject = {
      totalQuantity: this.itemService.totalQuantity(),
      totalPrice: this.itemService.totalPrice()
    };
    this.sendBack.emit(changesObject);
  }

  ngOnInit() {
    this.items = this.itemService.items;
    this.calculate();
  }
}
