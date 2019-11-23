import { Component, OnChanges, Input } from "@angular/core";
import { ProductMoney } from "./models/product";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { promoCode } from './data-fake';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnChanges {
  numberItems = 0;
  public prodcode;

  title = "shoppingCart";
  prod: ProductMoney = { totalMoney: 0, tax: 0, totalPaid: 0, promoMoney: 50 };

  getCode(val) {
    this.prodcode = val;
  }

  ngOnChanges(){
    
  }
  getItem(val) {
    this.numberItems = val[0];
    this.prod.totalMoney = val[1];
    this.prod.tax = this.prod.totalMoney / 10;
    // console.log(this.prodcode)
    if(promoCode.includes(this.prodcode)){
      this.prod.totalPaid = this.prod.totalMoney + this.prod.tax - this.prod.promoMoney;
    }else{
      this.prod.totalPaid = this.prod.totalMoney + this.prod.tax
    }
  }
}
