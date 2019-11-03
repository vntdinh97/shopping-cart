import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../models/item.model";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html"
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() quantityChanged: EventEmitter<any> = new EventEmitter();
  @Output() removeHandler: EventEmitter<number> = new EventEmitter();

  handleQuantityChanged(id: number, event: any) {
    const changes = {
      id: id,
      quantity: event.target.valueAsNumber
    };
    this.quantityChanged.emit(changes);
  }

  handleRemove(id: number) {
    this.removeHandler.emit(id);
  }

  constructor() {}

  ngOnInit() {}
}
