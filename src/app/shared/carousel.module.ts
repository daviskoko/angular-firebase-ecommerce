import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CarouselComponent, SlideComponent } from './index';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        CarouselComponent,
        SlideComponent
    ],
    declarations: [
        CarouselComponent,
        SlideComponent
    ]
})
export class CarouselModule { } 
