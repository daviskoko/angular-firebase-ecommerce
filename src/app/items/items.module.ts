import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ItemDetailsComponent, 
  ItemComponent, 
  ItemListComponent, 
  ItemByCategoryComponent
} from './index';
import { ItemRoutingModule } from "app/items/item-routing.module";
import { CarouselModule } from "app/shared/carousel.module";

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  declarations: [
    ItemDetailsComponent,
    ItemComponent,
    ItemListComponent,
    ItemByCategoryComponent
  ]
})
export class ItemsModule { }
