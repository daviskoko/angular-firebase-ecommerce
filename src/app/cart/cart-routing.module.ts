import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    CartComponent
} from './index';

const routes: Routes = [
    {
        path: '',
        component: CartComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule {}
