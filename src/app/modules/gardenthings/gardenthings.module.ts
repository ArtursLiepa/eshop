import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GardenthingsRoutingModule } from './gardenthings-routing.module';
import { GardenThingsComponent } from './garden-things/garden-things.component';
import { GardentoolstartpageComponent } from './components/gardentoolstartpage/gardentoolstartpage.component';
import { GardenSegmentComponent } from './components/garden-segment/garden-segment.component';

@NgModule({
  declarations: [GardenThingsComponent, GardentoolstartpageComponent, GardenSegmentComponent],
  imports: [CommonModule, GardenthingsRoutingModule],
  exports: [GardenThingsComponent],
})
export class GardenthingsModule {}
