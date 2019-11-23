import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent implements OnInit {
  numberProducts: number = 3;

  constructor() {}

  ngOnInit() {}
}
