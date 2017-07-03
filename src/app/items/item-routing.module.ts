import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    ItemDetailsComponent,
    ItemByCategoryComponent,
    ItemListComponent
} from './index';

const routes: Routes = [
    {
        path: '',
        component: ItemListComponent
    },
    {
        path: ':slug',
        component: ItemDetailsComponent
    },
    {
        path: ':slug/items',
        component: ItemByCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemRoutingModule {}
