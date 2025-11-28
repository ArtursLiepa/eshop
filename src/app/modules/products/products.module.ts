import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
import { ProductSegmentComponent } from './product-segment/product-segment.component';
import { ModifyDetailComponent } from './product-details/modify-detail/modify-detail.component';
// import { SortPipe } from '../../pipes/sort.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductsComponent,
    TestComponent,
    ProductSegmentComponent,
    ModifyDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
