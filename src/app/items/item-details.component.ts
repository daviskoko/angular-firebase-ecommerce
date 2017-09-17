import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ItemService, Item } from './index';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'apfem-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  loading = false;
  delay = 5000;
  loop = false;
  item: Item;
  cartForm: FormGroup;
  itemIndex: any;
  numbers = [
    {value: 1, display: 'One'},
    {value: 2, display: 'Two'},
    {value: 3, display: 'Three'},
    {value: 4, display: 'Four'},
    {value: 5, display: 'Five'}
  ];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private snackBar: MdSnackBar,
    private cartService: CartService
  ) {
    this.cartForm = new FormGroup({
      'item': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required)
    });
  }

  /**
   * Get an item from the items array using the slug parameter
   */
  getItem() {
    this.route.params.subscribe(
      (params: any) => {
        this.itemIndex = params['slug'];
        this.item = this.itemService.getItem(this.itemIndex);
      }
    );
  }

  /**
   * Add item to cart(users browser - localStorage)
   */
  onAddToCart() {
    this.loading = true;
    if (localStorage.getItem('cart-' + this.item.slug)) {
      this.snackBar.open('Already in your cart!', 'Ok', {
        duration: 5000,
      }),
      this.loading = false;
    } else {
      this.cartService.addItemToCart(this.cartForm.value);
      localStorage.setItem('cart-' + this.item.slug, JSON.stringify(this.cartForm.value));
      this.snackBar.open('Successfully added to cart!', 'Dismiss', {
        duration: 5000,
      });
    }
  }

  ngOnInit() {
    this.getItem();
  }
}
