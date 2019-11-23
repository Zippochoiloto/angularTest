import { Injectable } from '@angular/core';
import { DATAFAKE } from './data-fake';


export class MyServiceService {
  products = DATAFAKE;
  constructor() { }

  deleteProduct(id: string) {
      const index = this.products.findIndex(product => product.id === id);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
  }

  getTotalProduct(){
    let arrayTotal = [];
    let total = 0;
    let totalMoney = 0;
    this.products.map(value => {
      total += value.quantity;
      totalMoney += value.price * value.quantity;
    });
    arrayTotal.push(total, totalMoney);
    return arrayTotal
  }

  changeInputQuantity(id: string, inputElement: HTMLInputElement){
    const prod = this.products.find(data => data.id === id);
    let val = parseInt(inputElement.value);
    if (prod) {
      prod.quantity = val || 0;
    }
  }

  changeInputElement(inputElement: HTMLInputElement){
    let val = inputElement.value;
    return val;
  }
}

