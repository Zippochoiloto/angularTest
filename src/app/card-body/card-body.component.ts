import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { Product } from "../models/product";
import { DATAFAKE } from "../data-fake";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: "app-card-body",
  templateUrl: "./card-body.component.html",
  styleUrls: ["./card-body.component.css"],
  providers: [MyServiceService]
})
export class CardBodyComponent implements OnInit, OnChanges {
  @Output() newItem = new EventEmitter();
  @Input() code;
  products = DATAFAKE;

  constructor(private myServiceService: MyServiceService) {}

  ngOnInit() {
    setTimeout(() => {
      this.totalProduct();
    }, 0);
  }

  ngOnChanges() {
    setTimeout(() => {
      this.totalProduct();
    }, 0);
  }

  removeProduct(id: string) {
    this.myServiceService.deleteProduct(id);
    this.totalProduct();
  }

  // @Input() products;
  inputQuantity(id: string, inputElement: HTMLInputElement) {
    this.myServiceService.changeInputQuantity(id, inputElement);
    this.totalProduct();
  }

  totalProduct() {
    let arrayTotal = this.myServiceService.getTotalProduct();
    this.newItem.emit(arrayTotal);
  }
}
