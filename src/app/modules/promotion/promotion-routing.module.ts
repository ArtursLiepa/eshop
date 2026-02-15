import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';
import { PromotionDetailsComponent } from './components/promotion-details/promotion-details.component';
import { succesGuard } from '../../../Guards/succes.guard';

const routes: Routes = [
  {
    path: 'promotion',
    component: PromotionComponent,
    canActivate: [succesGuard],
    children: [
      {
        path: ':category',
        component: PromotionListComponent,
        children: [{ path: ':name', component: PromotionDetailsComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionRoutingModule {}
