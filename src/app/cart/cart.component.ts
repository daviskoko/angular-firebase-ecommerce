import { Component, OnInit } from '@angular/core';

import { CartService, Cart } from "./index";

@Component({
  selector: 'apfem-cart',
  templateUrl: './cart.component.html',
  styles: ['.cart{min-height:500px;}']
})
export class CartComponent implements OnInit {

  cart: Cart[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

}
