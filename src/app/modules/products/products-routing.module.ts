import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components import
import { ProductsComponent } from './products/products.component';
import { ProductSegmentComponent } from './product-segment/product-segment.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    // loadComponent: () =>
    //   import('./products/products.component').then((m) => m.ProductsComponent),
    children: [
      {
        path: ':category',
        component: ProductSegmentComponent,
        children: [
          {
            path: ':segment',
            component: ProductListComponent,
            children: [{ path: ':id', component: ProductDetailsComponent }],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
