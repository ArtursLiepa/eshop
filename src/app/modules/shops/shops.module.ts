import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsComponent } from './shops/shops.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { EshopDetailComponent } from './eshop-detail/eshop-detail.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [
    ShopsComponent,
    ShopsListComponent,
    EshopDetailComponent,
    ShopDetailComponent,
  ],
  imports: [CommonModule, MapModule, ShopsRoutingModule],
  providers: [provideHttpClient()],
  exports: [ShopsComponent],
})
export class ShopsModule {}
