import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServicesRoutingModule } from './our-services-routing.module';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { StartservicepageComponent } from './components/startservicepage/startservicepage.component';

@NgModule({
  declarations: [OurServicesComponent, ServiceDetailsComponent, StartservicepageComponent],
  imports: [CommonModule, OurServicesRoutingModule],
  exports: [OurServicesComponent],
})
export class OurServicesModule {}
