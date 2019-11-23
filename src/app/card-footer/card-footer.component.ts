import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { promoCode } from "../data-fake";
import { MyServiceService } from "../my-service.service";
@Component({
  selector: "app-card-footer",
  templateUrl: "./card-footer.component.html",
  styleUrls: ["./card-footer.component.css"],
  providers: [MyServiceService]
})
export class CardFooterComponent implements OnInit {
  @Input() prod;
  @Output() proMocode = new EventEmitter<any>();
  public code;
  constructor(private myServiceService: MyServiceService) {}

  ngOnInit() {}
  promoValue: string = "";
  confirmMess = false;

  onPromoClickHandler() {
    this.confirmMess = false;
    if (promoCode.includes(this.code)) {
      this.confirmMess = confirm("Use Promo Code?");
    }else{
      alert('Code khong ton tai. Nhap lai code khac')
    }
    this.proMocode.emit(this.code);
  }
}
