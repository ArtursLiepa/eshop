import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';
import { PromotionDetailsComponent } from './components/promotion-details/promotion-details.component';

@NgModule({
  declarations: [
    PromotionComponent,
    PromotionListComponent,
    PromotionDetailsComponent,
  ],
  imports: [CommonModule, PromotionRoutingModule],
  exports: [PromotionComponent],
})
export class PromotionModule {}
