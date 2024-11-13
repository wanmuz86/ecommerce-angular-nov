import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'products/:id',
        component:ProductsComponent
    },
    {
        path:'add-product',
        component:AddProductComponent
    },
    {
        path:'',
        component:ProductListComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
