import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
import { ProductSegmentComponent } from './product-segment/product-segment.component';
// import { SortPipe } from '../../pipes/sort.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductsComponent,
    TestComponent,
    ProductSegmentComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
