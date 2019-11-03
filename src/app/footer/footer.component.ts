import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html"
})
export class FooterComponent implements OnInit {
  @Input("totalPrice") price: number;
  totalPrice: number;
  coupon: string = "";
  promotion: number = 0;

  checkOut() {
    alert(`Nôn $${this.totalPrice} ra đây!!!!`);
  }

  handleChangeCoupon(event) {
    this.coupon = event.target.value;
  }

  submitCoupon() {
    if (this.coupon === "dinhdeptrai") {
      alert("Nói đúng rồi đó! Anh giảm cho $200!");
      this.promotion = 200;
      this.totalPrice -= this.promotion;
    }
    else {
      alert("Sủa bậy, rọ mồm!");
      this.promotion = 0;
    }
  }

  ngOnInit(){}

  ngDoCheck() {
    if (this.price === 0) {
      this.totalPrice = 0;
    } else {
      this.totalPrice = this.price + 5;
      if (this.totalPrice >= this.promotion) {
        this.totalPrice -= this.promotion;
      }
    }
  }
}
