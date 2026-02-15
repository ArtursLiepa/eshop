import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StartUpComponent } from './components/start-up/start-up.component';

const routes: Routes = [
  {
    path: 'services',
    loadChildren: () =>
      import('./modules/our-services/our-services.module').then(
        (m) => m.OurServicesModule
      ),
  },
  { path: '', component: StartUpComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
