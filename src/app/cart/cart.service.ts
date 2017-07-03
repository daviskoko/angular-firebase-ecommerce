import { Injectable } from '@angular/core';

import { Cart } from "./index";

@Injectable()
export class CartService {

  private cart: Cart[] = [];

  constructor() { }

  private findLocalStorageItems(query) {
    let i, results = [];
    for (i in localStorage) {
        if (localStorage.hasOwnProperty(i)) {
          if (i.match(query) || (!query && typeof i === 'string')) {
            let value = JSON.parse(localStorage.getItem(i));
            results.push({key:i,val:value});
          }
        }
    }
    return results;
  }

  // Get user cart
  getCart(){
      return this.cart = this.getCartFromLocalStorage();
  }

  // Extract values that has the 'cart-' key from the localStorage
  getCartFromLocalStorage(){
    return this.findLocalStorageItems('cart-');
  }

  // Add item to cart(localStorage)
  addItemToCart(formValues: Cart) {
    this.cart.push(formValues);
  }

  // Remove item from cart and localStorage
  removeItemFromCart(cart: Cart) {        
    localStorage.removeItem('cart-' + cart.item.slug);
  }

  // Remove all items in the cart
  clear() {
    return this.findLocalStorageItems('item-').splice(1)
  }

}
