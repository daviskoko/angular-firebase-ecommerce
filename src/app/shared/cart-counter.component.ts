import { Component, OnInit } from '@angular/core';

import { CartService, Cart } from "../cart";

@Component({
  selector: 'apfem-cart-counter',
  template: `
    <a md-button routerLink="/my-cart">
      <md-icon>shopping_cart</md-icon>
      <span class="badge">{{cart.length}}</span>
    </a>
  `,
  styles: [
    '.badge {background-color: #fff; border-radius: 50%; padding: 5px 8px; color: #333;}'
  ]
})
export class CartCounterComponent implements OnInit {

  cart: Cart[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {    
    this.cart = this.cartService.getCart();
  }

}
