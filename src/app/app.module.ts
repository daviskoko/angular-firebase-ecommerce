import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent, SimpleLayoutComponent } from './layouts';
import { HomepageComponent } from './homepage.component';
import { CarouselModule } from './shared/carousel.module';
import { 
  SideNavComponent,
  MainNavComponent,
  FooterComponent,
  CartCounterComponent
} from './shared';
import { ItemService } from "app/items/item.service";
import { CartService } from "app/cart/cart.service";

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    SimpleLayoutComponent,
    SideNavComponent,
    MainNavComponent,
    FooterComponent,
    CartCounterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    MaterialModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [
    ItemService,
    CartService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
