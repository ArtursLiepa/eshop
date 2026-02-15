import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenThingsComponent } from './garden-things/garden-things.component';
import { GardentoolstartpageComponent } from './components/gardentoolstartpage/gardentoolstartpage.component';
import { GardenSegmentComponent } from './components/garden-segment/garden-segment.component';

const routes: Routes = [
  {
    path: 'gardenThings',
    component: GardenThingsComponent,
    children: [
      {
        path: ':gardenthingCategoryName',
        component: GardenSegmentComponent,
      },
      { path: '', component: GardentoolstartpageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardenthingsRoutingModule {}
