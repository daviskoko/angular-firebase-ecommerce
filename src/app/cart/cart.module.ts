import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { CartRoutingModule } from "app/cart/cart-routing.module";
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [CartComponent, CartItemComponent]
})
export class CartModule { }
