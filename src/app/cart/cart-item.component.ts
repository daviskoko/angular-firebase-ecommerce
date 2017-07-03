import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Item } from "app/items";

@Component({
  selector: 'apfem-cart-item',
  template: `
    <div class="row cart-wrapper">
      <div class="col-xs-5">
        <div class="item-img" [ngStyle]="{'background': 'white url(' + cartItem.val.item.photos[0].path +')',
          'background-repeat': 'no-repeat','background-size': 'cover','width': 'auto','min-height': '200px',
          'background-position': 'center center','color': '#FFF' }">
        </div>
      </div>
      <div class="col-xs-7 start-xs">
        <h4>{{cartItem.val.item.name}}</h4>
        <p><small>{{cartItem.val.item.price | currency:USD:true}}</small>
        <small class="old-price">{{cartItem.val.item.old_price | currency:USD:true}}</small></p>
        <form (ngSubmit)="onUpdateCart()" [formGroup]="updateCartForm">
          <input type="hidden" formControlName="item" [(ngModel)]="cartItem.val.item">
          <md-select placeholder="Quantity" formControlName="quantity" [(ngModel)]="cartItem.val.quantity">
              <md-option *ngFor="let qty of numbers" [value]="qty.value">
                  {{ qty.display }}
              </md-option>
          </md-select>
          <br>
          <p>
            <small>Sub-Total: {{cartItem.val.quantity * cartItem.val.item.price | currency:USD:true}}</small>
            &nbsp;&nbsp;&nbsp;
            <button md-button md-raised-button color="accent" [disabled]="updateCartForm.pristine">
              UPDATE CART
            </button>
          </p>
        </form>
      </div>
    </div>
    <br>
  `,
  styles: ['.cart-wrapper{border:1px solid #eee; background-color:#fff; border-radius:4px;}']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: Item;
  updateCartForm: FormGroup;
  numbers = [
    {value: 1, display: 'One'},
    {value: 2, display: 'Two'},
    {value: 3, display: 'Three'},
    {value: 4, display: 'Four'},
    {value: 5, display: 'Five'}
  ];

  constructor() {
    this.updateCartForm = new FormGroup({
      'item': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required)
    });
   }

  onUpdateCart() {
    console.log(this.updateCartForm.value);
    
  }

  ngOnInit() {
  }

}
