import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { DefaultLayoutComponent } from './layouts/default-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { HomepageComponent } from 'app/homepage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'items',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/items/items.module#ItemsModule'
            }
        ]
    },
    {
        path: 'my-cart',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/cart/cart.module#CartModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouting {}
