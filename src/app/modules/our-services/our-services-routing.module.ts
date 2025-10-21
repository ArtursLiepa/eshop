import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { StartservicepageComponent } from './components/startservicepage/startservicepage.component';

const routes: Routes = [
  {
    path: 'services',
    component: OurServicesComponent,
    children: [
      {
        path: ':name',
        component: ServiceDetailsComponent,
      },
      { path: '', component: StartservicepageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurServicesRoutingModule {}
